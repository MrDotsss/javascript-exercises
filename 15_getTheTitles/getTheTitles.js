const getTheTitles = function(array) {
    let newBooks = []

    for (let i = 0; i < array.length; i++) {
        newBooks[i] = array[i].title
    }
    return newBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
