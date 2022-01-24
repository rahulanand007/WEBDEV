//Array provides you ordered collection of elements

let arr = []       // Array declaraltion

let random = ['Rahul', 4, null,false]
console.log('This is a random array - ', random)

//Accessing elements of array
for(i=0; i<random.length; i++){
console.log(i+1,"Element of array -", random[i])
}

//Add elements in array
random[5]= 'New'
console.log(random)

//******************************************************************
console.log('*********************************************************')
//Methods in Array-

// 1- pop() - This method Removes the last element from an array and 
//    returns it.If the array is empty, undefined is returned and the 
//    array is not modified.
console.log(random.pop())
console.log(random.pop())
console.log(random)

// 2- push() - this method adds the passed value at the end of an array
random.push('Anand')
console.log(random)

// 3- shift() - removes the first element of the array
random.shift()
console.log(random)

// 4- unshift() - Adds the element at the start of the array
random.unshift('Mr.')
console.log(random)
console.log('*********************************************************')

//Multidimentional array

let matrix= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[1][1])