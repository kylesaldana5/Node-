#!/usr/bin/env node

const [,,...number] = process.argv;

console.log('number', number );

const sum = number.reduce((num1, num2) =>{
    console.log(`The sum is ${num1 + num2}` );
    
})
