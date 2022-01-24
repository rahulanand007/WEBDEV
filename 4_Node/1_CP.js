// CHILD PROCESS//
const cp = require('child_process')
console.log('Trying to open a calculator')
cp.execSync('calc')

console.log('Trying to open VS code')
cp.execSync('code')

//To open a browser//
cp.execSync('start chrome')
cp.execSync('start chrome https://www.coingecko.com/en/coins/xrp/usd')
 
// TO open code from another file//
let output = cp.execSync('node test.js')
console.log("output" + output)
