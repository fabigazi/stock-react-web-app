import countryCodes from './countries.json';

function countryToCountryCode(countryName) {
    countryName = countryName.toLowerCase();
    return countryCodes[countryName] || null;
  }
