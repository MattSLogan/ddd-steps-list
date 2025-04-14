import { LitElement, html, css } from "lit";
import { DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list-item`
 * @element ddd-steps-list-item
 */
export class DddStepsListItem extends DDDPulseEffectSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "";
    this.count = 0;
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      count: { type: Number },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
          background-color: var(--ddd-theme-accent);
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          margin: 0 var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-2);
        }

        .header-content {
          display: flex;
          align-items: center;
          margin-bottom: var(--ddd-spacing-2);
        }

        .circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--ddd-theme-primary, var(--ddd-primary-1));
          color: var(--ddd-theme-default-white);
          font-size: var(--ddd-font-size-xs);
          font-weight: var(--ddd-font-weight-bold);
          margin-right: var(--ddd-spacing-2);
          flex-shrink: 0;
        }

        h3 {
          margin: 0;
          font-size: var(--ddd-font-size-m);
        }

        .vl {
          border-left: 2px dashed var(--ddd-theme-default-limestoneGray);
          margin-left: 24px;
          padding-left: var(--ddd-spacing-4);
        }

        .content {
          display: block;
        }

        @media (max-width: 768px) {
          .wrapper {
            padding: var(--ddd-spacing-2);
          }
          .header-content {
            flex-direction: row;
            text-align: left;
          }
          .circle {
            margin-left: 0;
          }
          .vl {
            border-left: none;
            padding-left: 0;
            margin-left: 0;
          }
          .content {
            margin-left: var(--ddd-spacing-0);
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="header-content">
          <div class="circle">${this.count}</div>
          <h3>${this.title}</h3>
        </div>
        <div class="vl">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);
