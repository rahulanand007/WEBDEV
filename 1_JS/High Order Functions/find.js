// Find returns the first occurance of the array that satisfy the condition

const transactions = [1000,2000,-3903,4000,-48,6789];

const firstWithdrawal = transactions.find(function(n){
    return n < 0
})
console.log(firstWithdrawal)