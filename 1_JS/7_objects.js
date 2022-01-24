//In JS objects are basically key value pair

//To declare an object

let obj = {}

let person = {
    name : 'Rahul',
    age : 23,
    phNo : 1234567,
    friends :['vivek', 'manav'],            // Array inside object
    address :{
        state : "New Delhi",               // object inside an object
        country : "India"
    },
    sayHi : function fn(){
        console.log('Rahul says Hi')      // function inside an object
    }

}
console.log(person)

// Access a key of an object
console.log(person.name)    //Dot Notation
console.log(person['name'])    //Bracket Notation
console.log(person.address.state)
//Accessing a function
person.sayHi()

console.log('**************************************************')
// for in loop
for(let i in person){
    console.log("key :",i, 'value', person[i])
}

//adding a key
person.job = 'SE'
//deleting a key
delete person.age
console.log(person)