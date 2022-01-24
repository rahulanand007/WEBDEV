function add(a,b){
    console.log("The sum is ",a+b)
}

function sub(a,b){
    console.log("The subtraction is ",a-b)
}

function mul(a,b){
    console.log("The product is ",a*b)
}

function div(a,b){
    console.log("The div is ",a/b)
}

module.exports={
    addition: add,
    subtraction: sub,
    multiply: mul,
    division: div
}