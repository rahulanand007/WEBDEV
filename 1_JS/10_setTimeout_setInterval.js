print = ()=>{
    console.log("this fn is to demosterate setTimeout");
}

clr = setTimeout(print,2000)

clr = setInterval(print, 4000)

//use clearInterval(clr)/clearTimeout(clr) to cancel

