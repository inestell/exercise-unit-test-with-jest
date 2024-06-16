const sum = (a, b) => {
    return a + b;
};

const fromDollarToYen = (valueInDollar) => {
    return valueInDollar * (156.5/1.07)
};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};

const fromYenToPound = (valueInYen) => {
    return valueInYen * (0.87/156.6)
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};