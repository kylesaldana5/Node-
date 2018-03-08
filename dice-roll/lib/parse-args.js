"use strict";

module.exports = (input) => {
    if(input.length < 1){
        return{
            'count': 1,
            'sides': 6
        }
    } else if (input.length == 1){
        return{
            'count':1,
            'sides':input[0]
        }
    } else {
        return{
            'count': input[0],
            'sides': input[1]
        }
    }
}