'use strict';





function getRectangleArea(width, height) {
    return width * height;
}



function getCicleCircumference(radius) {
    return 2*Math.PI*radius;
}


function getAverage(value1, value2) {
    return (value1 / 2 + value2 / 2);
}


function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.hypot(x2-x1, y2-y1);
}


function getLinearEquationRoot(a, b) {
    return -b / a;
}



function getAngleBetweenVectors(x1, y1, x2, y2) {
    return Math.acos((x1 * x2 + y1 * y2) / (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2)));
}


function getLastDigit(value) {
    return value%10;
}



function parseNumberFromString(value) {
    return parseFloat(value);
}


function getParallelipidedDiagonal(a,b,c) {
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2));
}


function roundToPowerOfTen(num, pow) {
    return Math.round(num/Math.pow(10,pow)) * Math.pow(10,pow);
}


function isPrime(n) {
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


function toNumber(value, def) {
    if (Number.isNaN(Number.parseInt(value))){
        return def;
    }
    else{
        return Number.parseInt(value);
    }
}

module.exports = {
    getRectangleArea: getRectangleArea,
    getCicleCircumference: getCicleCircumference,
    getAverage: getAverage,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    getLinearEquationRoot: getLinearEquationRoot,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getLastDigit: getLastDigit,
    parseNumberFromString: parseNumberFromString,
    getParallelipidedDiagonal: getParallelipidedDiagonal,
    roundToPowerOfTen: roundToPowerOfTen,
    isPrime: isPrime,
    toNumber: toNumber
};
