//It is a sequence of characters

let str = 'RahulAnand007'
console.log(str)

//Length of string
console.log(str.length)

//Methods

// Extracting a part of string.
// 1- Slice(start, end+1)
console.log(str.slice(5,13))

// 2-substr(Start, length)
console.log(str.substr(5,5))

//Replacing String content
// replace('Value to replace',' Value with it is replaced')
console.log(str.replace('007','712'))

//toLowerCase and toUpperCase
let str1 = 'HelloRahul'
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str.toLowerCase())

//Concatenation Method (concat)
let firstString = 'Hello'
let secondString = 'Rahul'
console.log(firstString.concat(' ',secondString))

//Trim method is used to remove all the extra white spaces
let text = '         RAHULANAND        '
console.log(text)
console.log(text.trim())