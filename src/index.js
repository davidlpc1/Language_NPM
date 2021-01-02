const languanges = require('./linguagens-de-programacao.json')

const forEachLanguage = (callback) => {
    languanges.forEach(callback);
}

module.exports = { 
    all: languanges,
    forEachLanguage
}