/**
 * Copyright 2025 MattSLogan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-steps-list-item.js";

/**
 * `ddd-steps-list`
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.title = "";
    this.children = [];
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      children: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .list {
          display: block;
          gap: var(--ddd-spacing-2);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="list">
          <slot id="list-slot"></slot>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has("title")) {
      this.countChildren();
    }
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.validateChildren();
  }

  countChildren() {
    const items = this.querySelectorAll("ddd-steps-list-item");
    items.forEach((element, index) => {
      element.count = index + 1;
    });
  }

  validateChildren() {
    const slot = this.shadowRoot.querySelector("#list-slot");
    if (!slot) return;

    const assignedElements = slot.assignedElements({ flatten: true });
    assignedElements.forEach((child) => {
      if (child.tagName.toLowerCase() !== "ddd-steps-list-item") {
        console.warn(`Invalid tag removed from ddd-steps-list:`, child);
        child.remove();
      }
    });
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);
