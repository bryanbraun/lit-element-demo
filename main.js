import { Password } from './components/password.js';
import { LengthSlider } from './components/length-slider.js';
import { Checkbox } from './components/checkbox.js';
import { DarkMode } from './components/dark-mode.js';
import { store } from './password-store.js';

customElements.define('pw-password', Password);
customElements.define('pw-length-slider', LengthSlider);
customElements.define('pw-dark-mode', DarkMode);
customElements.define('pw-checkbox', Checkbox);

// new Checkbox({ name: 'Numbers', id: 'numbers', stateKey: 'characterOptions.hasNumbers' }).render();
// new Checkbox({ name: 'Symbols', id: 'symbols', stateKey: 'characterOptions.hasSymbols' }).render();

window.PWStore = store;
