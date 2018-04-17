"use strict";

const randomInt = (lowBound, upBound) => {
    let result = 0;
    for (let i = 0; i < lowBound.length; i++) {
        result += Math.floor(math.random() * upBound) + lowBound;
        }
        return result;
}

module.exports = { randomInt }