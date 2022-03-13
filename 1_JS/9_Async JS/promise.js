// // Promise
// 1.reject
// 2.resolve
// 3.pending


function f1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
        let error = true;
        if(error){
            console.log("rejected");
            reject("sorry not fullfilled");
        }else{
            console.log("resolved");
            resolve();
        }
        },2000);
    })
}

f1().then(()=>{
    console.log("statement for resolving")
}).catch((error)=>{
    console.log("Statement for not resolving "+ error)
})