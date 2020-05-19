const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en'
  },
  all: {
    fr: 'fr',
    en: 'en'
  }
};

module.exports = new NextI18Next({
  otherLanguages: ['en'],
  localeSubpaths: localeSubpathVariations[localeSubpaths]
});