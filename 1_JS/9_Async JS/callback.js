//Callback fn - any function that is passed as an argument in another fn

const fs = require('fs')

function printFirstName(firstName, cb){
    console.log(firstName)
    cb('Anand') 
}



function printLastName(lastName){
    console.log(lastName)
}
printFirstName('Rahul',printLastName)

//Asynchronous way of reading file
fs.readFile('f1.txt',cb)

function cb(err,data){
    if(err){
        console.log(err)
    }
    console.log(' ' + data)
}

