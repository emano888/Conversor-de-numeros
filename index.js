
var isValid = require("./src/validateInputType");
var valueToBigInt = require("./src/valueToBigInt");
var valueFromBigIntTo = require("./src/valueFromBigIntTo");

function removeSpacesAndChars(value) {
    return value.replace(/ |\t|\n|:|-/gi, ""); //replace empty, tab spaces, newline chars, :, - with ""
}

function getBase(type) {
    var base = "";
    if (type == "bin") {
        base = 2;
    } else if (type == "dec") {
        base = 10;
    } else if (type == "hex") {
        base = 16;
    }
    return base;
}

module.exports = function (inputValue, inputType, newType) {
    inputValue = removeSpacesAndChars(inputValue)

    if(isValid(inputValue, inputType)) {
        let currBase = getBase(inputType);
        let bigInt = valueToBigInt(inputValue, currBase);
        let newBase = getBase(newType);
        let newValue = valueFromBigIntTo(bigInt, newBase);
        return newValue;
    } else {
        throw new TypeError("Invalid input!");
    }

}