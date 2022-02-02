let arr = [2,3,4,5,6,78,9]

// we need to take out all the even nums

let evenNo = arr.filter(function(n){
    if(n%2==0){
        return true
    }else{
        return false
    }
})

console.log(evenNo)