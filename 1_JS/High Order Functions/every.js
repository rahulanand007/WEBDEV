//Returns true if all the elements satisfy the condition

const transactions = [1000,2000,-3903,4000,-48,6789];

let anyDeposit = transactions.every(function(n){
    return n>0
})
console.log(anyDeposit)