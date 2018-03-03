var name =  "JOHN DOE";
var question =  "what does that spell" ;

// Object literal shorthand
var obj = { name, question } 


//  Destructuring assignments
var {name, question} = obj 

//  use let or const and fat arrow
let arr = []
let push = () =>{
    arr.push(name, question)
    return arr
}

push()

// Spread operator
const[n]=arr;
const [, spell]= arr;



