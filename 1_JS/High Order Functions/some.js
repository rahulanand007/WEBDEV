//It will return true if 1 or more than 1 element satisfies the condition

const transactions = [1000,2000,-3903,4000,-48,6789];

let anyDeposit = transactions.some(function(n){
    return n>0
})
console.log(anyDeposit)