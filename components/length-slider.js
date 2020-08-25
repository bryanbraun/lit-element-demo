import { LitElement, html, css } from '../web_modules/lit-element.js';
import { store } from '../password-store.js';

export class LengthSlider extends LitElement {
  constructor() {
    super();

    store.subscribe('passwordLength', () => this.requestUpdate());
  }

  static get styles() {
    return css`
      input[type="range"] {
        width: 100%;
        /* padding-top: 4px; */
      }
      @media (max-width: 600px) {
        input[type="range"] {
          width: initial;
        }
      }
    `
  }

  updateLength(event) {
    store.set('passwordLength', parseInt(event.target.value));
  }

  render() {
    return html`
      <label>
        <div>Password Length: <output>${store.state.passwordLength}</output></div>
        <input type="range" min="8" max="20" @input="${this.updateLength}" value="${store.state.passwordLength}" />
      </label>
    `;
  }
}
