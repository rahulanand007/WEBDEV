
//Split- splits the string according to the passed parameter and returns the array
let str = 'I am a person and my name is Rahul'

let partOfString = str.split('a')

//console.log(partOfString)

//Join- joins the array by replacing the space with the passed parameter
let joinedStr = partOfString.join('a')
//console.log(joinedStr)


//Example Question

let nameArr = ['Vishal Kumar', 'Vaibhav Rawal', 'Rahul Anand']

let firstName = nameArr.map(function(n){
    let partsOfname = n.split(' ');
    return partsOfname[0];
})
console.log(firstName)
