const repeatString = function(str, num) {
    if(num >= 0) {
        const word = str;
        str = ""
       for (let i = 1; i <= num; i++) {
            str+= word
       }

        return str;

    } else return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
