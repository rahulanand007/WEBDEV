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