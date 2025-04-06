import { LitElement, html, css } from "lit";

/**
 * `ddd-steps-list-item`
 *
 * @element ddd-steps-list-item
 */
export class DddStepsListItem extends LitElement {
  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "Step";
    this.stepNumber = 1;
  }

  static get properties() {
    return {
      title: { type: String },
      stepNumber: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--ddd-spacing-3, 16px);
        border: var(--ddd-border-sm, 1px solid #ccc);
        background: var(--ddd-theme-light, #f9f9f9);
        font-family: var(--ddd-font-body, sans-serif);
        margin-bottom: var(--ddd-spacing-2, 12px);
      }

      .step-container {
        display: flex;
        align-items: flex-start;
        gap: var(--ddd-spacing-2, 12px);
      }

      .step-circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: var(--ddd-theme-primary, #007bff);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        flex-shrink: 0;
      }

      .step-content {
        flex: 1;
      }

      .step-header {
        font-weight: bold;
        color: var(--ddd-theme-primary, #007bff);
        margin-bottom: 4px;
      }
    `;
  }

  render() {
    return html`
      <div class="step-container">
        <div class="step-circle">${this.stepNumber}</div>
        <div class="step-content">
          <div class="step-header">${this.title}</div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(DddStepsListItem.tag, DddStepsListItem);
