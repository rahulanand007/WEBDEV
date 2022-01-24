//Normal function

function sayHi(){                  // function declaration
    console.log("function said hi")
}
sayHi()  //function invokation


// Parameters in functions

function add(a,b){
    console.log("The addition is", a+b)
}
add(2,3)

function multiply(a,b){
    console.log("The multiplication is", a*b)
}
multiply(2,3)

//IIFE(Immediately invoked function expression)
let sub = (function(a,b){
    return b-a
})(5,25)
console.log('Subtraction is',sub)