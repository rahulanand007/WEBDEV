// Higher order functions are functions that takes function as argument
//or returns a function


let arr = [2,5,9,8,15,11,6]

//Map Function
//map itself is a function
//map takes a callback funtion as an argument
//map will call the callback funtion as many times as the elements in aaray
//map will process every value and will apply the instruction inside the callback funtion
//map returns a new array
let square = arr.map(function squarer(v){
    return v*v
})


//**************************************** */

let nameArr = ['Rahul', 'Anand', 'Sunny']

let printName = nameArr.map(function print(n){
    return n ;
})
//console.log(printName)

//Example Question
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let rupees = transactions.map(function(n){
    return n*inrtToUsd;
})

console.log(rupees)