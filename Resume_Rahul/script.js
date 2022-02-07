console.log("Script running")

document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGO');
    if(document.querySelector('.sidebar').classList.contains('sidebarGO')){
        document.querySelector('.ham').style.display= 'inline'
    }else{
        document.querySelector('.ham').style.display= 'none'    
    }
})

document.querySelector('.cross').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGO');
        if(document.querySelector('.sidebar').classList.contains('sidebarGO')){
            setTimeout(()=>{
            document.querySelector('.ham').style.display='inline'
            },300)
        }else{
            document.querySelector('.ham').style.display= 'none'
        }
})