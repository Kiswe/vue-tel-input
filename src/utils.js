import allCountries from './assets/all-countries';

export function getCountry() {
  return fetch('https://extreme-ip-lookup.com/json/')
    .then(response => response.text())
    .then((response) => {
      const result = JSON.parse(response);

      if (!result) {
        throw new Error('unable to fetch the country');
      }

      return result.countryCode;
    });
}

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
export function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);

  // IE8 and below
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

export const defaultOptions = {
  placeholder: 'Enter a phone number',
  disabledFetchingCountry: false,
  disabled: false,
  disabledFormatting: false,
  mode: '',
  invalidMsg: '',
  required: false,
  allCountries,
  defaultCountry: '',
  enabledCountryCode: false,
  enabledFlags: true,
  preferredCountries: [],
  onlyCountries: [],
  ignoredCountries: [],
  autofocus: false,
  autocomplete: 'on',
  name: 'telephone',
  wrapperClasses: '',
  inputClasses: '',
  inputId: '',
  dropdownOptions: {},
  inputOptions: {},
  maxLen: 25,
  validCharactersOnly: false,
  dynamicPlaceholder: false,
};

export default {
  options: { ...defaultOptions },
};
