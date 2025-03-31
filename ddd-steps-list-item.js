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
    this.step = 1; // Default step number
  }

  static get properties() {
    return {
      title: { type: String },
      step: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: var(--ddd-spacing-3);
        border: var(--ddd-border-sm);
        background: var(--ddd-theme-light);
        font-family: var(--ddd-font-body);
      }
      .step-header {
        font-weight: bold;
        color: var(--ddd-theme-primary);
      }
    `;
  }

  render() {
    return html`
      <div class="step-header">Step ${this.step}: ${this.title}</div>
      <slot></slot>
    `;
  }
}

customElements.define(DddStepsListItem.tag, DddStepsListItem);
