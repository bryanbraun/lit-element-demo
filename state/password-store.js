import { GlobalState } from './state.js';

const initialState = {
  passwordLength: 10,
  characterOptions: {
    hasNumbers: false,
    hasSymbols: false,
  }
};

export const store = new GlobalState(initialState);
