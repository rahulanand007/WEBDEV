//Execution Context - The Environment where JS code is executrd and evaluated

//Glo bal Execution Context - by default an execution is provided by JS in which the whole code will reside

var a =2
var b=3

function add(m,n){
    var sum = m+n
    return sum
}

var sum1 = add(1,2)
var sum2 = add(a,b)

