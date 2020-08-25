import { LitElement, html, css } from '../web_modules/lit-element.js';
import { store } from '../password-store.js';

export class Password extends LitElement {
  constructor() {
    super();

    store.subscribe('passwordLength', () => this.requestUpdate());
  }

  generatePassword() {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newPassword = '';
    let passwordLength = store.state.passwordLength;

    if (store.state.characterOptions.hasNumbers) {
      charset = `${charset}0123456789`;
    }
    if (store.state.characterOptions.hasSymbols) {
      charset = `${charset}!#$%&()*+,-.:;=?@[]^_{}~`;
    }

    for (var i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return newPassword;
  }

  handleRefresh() {
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="password">
        <div class="password__text">${this.generatePassword()}</div>
        <button class="password__refresh" @click="${this.handleRefresh}">
          <svg xmlns="http://www.w3.org/2000/svg" class="refresh-icon" viewBox="0 0 18 18">
            <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z"/>
          </svg>
        </button>
      </div>
    `;
  }

  static get styles() {
    return css`
      .password {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
      }

      .password__text {
        flex: 1 1 100%;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        background-color: var(--pw-field-background-color);
        border: 1px solid var(--pw-border-color);
        border-right: 0;
        text-align: center;
        padding: 1rem;
        font-size: 36px;
        border-radius: 6px 0 0 6px;
      }

      .password__refresh {
        flex: 0 0 auto;
        background-color: var(--pw-field-background-color);
        border: 1px solid var(--pw-border-color);
        padding: 1rem;
        cursor: pointer;
        border-radius: 0 6px 6px 0;
        outline: none;
      }

      .refresh-icon {
        width: 36px;
        height: 36px;
      }
      .refresh-icon path {
        fill: var(--pw-font-color);
      }

      .password__refresh:focus {
        background-color: var(--pw-button-focus-color);
      }

      @media (max-width: 600px) {
        .password__text {
          flex: 0 0 auto;
          font-size: 20px;
        }
        .refresh-icon {
          width: 18px;
          height: 18px;
        }
      }
    `;
  }
}
