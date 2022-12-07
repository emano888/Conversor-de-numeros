module.exports = (inputValue, currBase) => {
    if (currBase === 16) {
        inputValue = '0x' + inputValue;
    } else if (currBase === 2) {
        inputValue = '0b' + inputValue;
    }
    return BigInt(inputValue);
}