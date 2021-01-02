const { expect } = require('@jest/globals');
const programming_languages_package = require('./index');
const programming_languages_json = require('./linguagens-de-programacao.json');

test('Show programming languanges from package', () => {
  expect(programming_languages_package.all).toBe(programming_languages_json);
});