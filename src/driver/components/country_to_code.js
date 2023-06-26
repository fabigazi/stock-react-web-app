import countryCodes from './countries.json';

function getCountryCode(countryName) {
  for (let code in countryCodes) {
    if (countryCodes[code] === countryName) {
      console.log(code);
      return code;
    }
  }
  return null;
}

export default getCountryCode;