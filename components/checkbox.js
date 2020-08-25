import { LitElement, html, css } from '/web_modules/lit-element.js';
import { store } from '../password-store.js';

export class Checkbox extends LitElement {
  constructor() {
    super();

    store.subscribe(this.stateKey, () => this.requestUpdate());
  }

  static get properties() {
    return {
      name: {},
      stateKey: {},
    }
  }

  handleChange(event) {
    store.set(this.stateKey, event.target.checked);
  }

  render() {
    const isChecked = store.state[this.stateKey];

    return html`
      <span>${this.name}</span>
      <input type="checkbox" @change="${this.handleChange}" ?checked="${isChecked}" />
    `;
  }
}
