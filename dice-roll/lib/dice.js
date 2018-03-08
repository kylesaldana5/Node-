"use strict"

const {randomInt} = require("./math");

module.exports.toDiceNotation =  ({count, sides}) =>  `${count.toString()} d ${sides.toString()}`;

module.exports.roll = (string) => {
    let lowBound = +string.slice(0, string.indexOf('d'))
    let upBound = +string.slice(string.indexOf('d') +1)
     return randomInt(lowBound, upBound);
}
