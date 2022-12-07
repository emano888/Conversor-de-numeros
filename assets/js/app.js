$(function () {

    $('#convert').click(() => {

        var value = $('#inputVal').val();
        var type = $('#inputType').val();
        var newType = $('#outputType').val();

        // console.log($('#outputVal').val())

        value = removeSpacesAndChars(value);


        if (isInputTypeValid(value, type)) {
            console.log("valid input")
            var currBase = getBase(type);
            var bigInt = valueToBigInt(value, currBase);
            var newBase = getBase(newType);
            var newValue = valueFromBigIntTo(bigInt, newBase);
            $('#outputVal').val(newValue);
            console.log(newValue)
        } else {
            $('#errorTag').text("(Invalid input)")
            console.log("invalid input");
        }
    })


    function removeSpacesAndChars(value) {
        return value.replace(/ |\t|\n|:|-/gi, ""); //replace empty, tab spaces, newline chars, :, - with ""
    }

    function isInputTypeValid(value, type) {
        value = value.trim();
        if (value.length == 0 || value == null) {
            return false
        }
        if (type == "bin") {
            return isBinary(value);
        } else if (type == "dec") {
            return isDecimal(value);
        } else if (type == "hex") {
            return isHexadecimal(value);
        }
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

    function isBinary(value) {
        return (/^[01]+$/).test(value);
    }

    function isDecimal(value) {
        return (/^[0123456789]+$/).test(value);
    }

    function isHexadecimal(value) {
        return (/^[0-9a-fA-F]+$/).test(value);
    }

    function isBase64(value) {
        return (/^[0-9a-zA-Z=_]+$/).test(value);
    }

    function valueToBigInt(value, currBase) {
        console.log(currBase)
        if (currBase === 16) {
            value = '0x' + value;
        } else if (currBase === 2) {
            value = '0b' + value;
        }
        return BigInt(value);
    }

    function valueFromBigIntTo(value, newBase) {
        console.log(newBase)
        return value.toString(newBase);
    }


});