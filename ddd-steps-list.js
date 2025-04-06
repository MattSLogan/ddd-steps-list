/**
 * Copyright 2025 MattSLogan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.title = "";
    this.t = {
      title: "Steps",
    };
    this.registerLocalization({
      context: this,
      localesPath: new URL("./locales/ddd-steps-list.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-accent, #fff);
          color: var(--ddd-theme-primary, #333);
          font-family: var(--ddd-font-navigation, sans-serif);
        }

        .wrapper {
          padding: var(--ddd-spacing-4, 16px);
        }

        h3 {
          font-size: var(--ddd-steps-list-label-font-size, 1.25rem);
          margin-bottom: var(--ddd-spacing-2, 8px);
        }
      `
    ];
  }

  updated() {
    super.updated();
    this._updateSteps();
  }

  _updateSteps() {
    const slot = this.shadowRoot.querySelector("slot");
    if (slot) {
      const steps = slot.assignedElements({ flatten: true }).filter(el => el.tagName === "DDD-STEPS-LIST-ITEM");
      steps.forEach((step, index) => {
        step.stepNumber = index + 1;
      });
    }
  }

  render() {
    return html`
      <div class="wrapper" aria-label="${this.title}">
        <h3>${this.t.title}: ${this.title}</h3>
        <slot @slotchange="${this._updateSteps}"></slot>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

customElements.define(DddStepsList.tag, DddStepsList);
