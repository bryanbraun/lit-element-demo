import { LitElement, html } from '/web_modules/lit-element.js';

export class DarkMode extends LitElement {
  constructor() {
    super();

    this.isDark = false;
  }

  static get properties() {
    return {
      isDark: { type: Boolean }
    };
  }

  handleChange() {
    this.isDark = !this.isDark;
  }

  render() {
    document.body.setAttribute('data-theme', this.isDark ? 'dark' : 'light');

    return html`
      <label>
        <span>Dark Mode</span>
        <input type="checkbox" ?checked="${this.isDark}" @change="${this.handleChange}" />
      </label>
    `;
  }
}
