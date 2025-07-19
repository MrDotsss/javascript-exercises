const palindromes = function (word) {
    let reversed = word.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .split('').reverse().join('');

    return reversed.replace(/\s/g, '')
        .toLowerCase() === word.trim()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
            .replace(/\s/g, '').toLowerCase();
};
// Do not edit below this line
module.exports = palindromes;
