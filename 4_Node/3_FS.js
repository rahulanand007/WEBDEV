const fs = require('fs')

const path = require('path')

// Content of other files
let content = fs.readFileSync('test.txt')
console.log("this is the data" + content)

//Write data on other files
fs.writeFileSync('test1.txt', 'This data will be written in test file')
fs.writeFileSync('test2.txt', 'This data will be written in test file')

//Append a file
fs.appendFileSync('test1.txt','This is appended data')

//delete a file
fs.unlinkSync('test2.txt')
console.log('test2 deleted')



//*********Directories************************/

//creating a directory(FOLDER)//
  fs.mkdirSync('myDirectory3')

// delete a directory//
fs.rmkdirSync('myDirectory')

//To check whether Directory exists or not//
let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)

//TO see stats of directory//
let statsOfDirectory = fs.lstatSync('myDirectory')
console.log(statsOfDirectory)

console.log('isFile?' , statsOfDirectory.isFile())

console.log('isDirectory?' , statsOfDirectory.isDirectory())

//Read directories
let folderpath = 'E:\\MERN\\WebDev\\4_Node\\myDirectory'
let foldercontent = fs.readdirSync(folderpath)
console.log('Directory    '+ foldercontent)

//Copying Files
//Source and destination file
let srcFilePath = 'E:\\MERN\\WebDev\\4_Node\\test.txt'
let destinationPath = 'E:\\MERN\\WebDev\\4_Node\\myDirectory2'

let toBeCopiedFileName = path.basename(srcFilePath)
let destPath = path.join(destinationPath, toBeCopiedFileName)
fs.copyFileSync(srcFilePath, destPath)
console.log('File Copied')