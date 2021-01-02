const { expect } = require('@jest/globals');
const programming_languages_package = require('./index');
const programming_languages_json = require('./linguagens-de-programacao.json');

test('Show programming languanges from package', () => {
  expect(programming_languages_package.all).toBe(programming_languages_json);
});

test('Using forEachLanguage', () => {
  expect(programming_languages_package.forEachLanguage(language => console.log(language)))
    .toBe(programming_languages_json.forEach(language => console.log(language)))
})