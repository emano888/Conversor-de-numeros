module.exports = (inputValue, inputType) => {
    inputValue = inputValue.trim();
    if (inputValue.length == 0 || inputValue == null) {
        return false
    }
    if (inputType == "bin") {
        return (/^[01]+$/).test(inputValue); //check if binary
    } else if (inputType == "dec") {
        return (/^[0123456789]+$/).test(inputValue); //check if decimal
    } else if (inputType == "hex") {
        return (/^[0-9a-fA-F]+$/).test(inputValue); //check if hexadecimal
    }
}