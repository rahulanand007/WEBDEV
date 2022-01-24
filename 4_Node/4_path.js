const path = require('path')
//To get the extention name
let ext = path.extname('E:\\MERN\\WebDev\\4_Node\\test.txt')
console.log('Extention Name ->'+ ext)

//to get basename //
let basename = path.basename('E:\\MERN\\WebDev\\4_Node\\test.txt')
console.log('BaseName->'+ basename)

//To get the path of current directory//
console.log(__dirname) 
//To get the filename of current directory
console.log(__filename)
