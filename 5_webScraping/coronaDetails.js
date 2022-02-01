const request = require('request')
const cheerio = require('cheerio')


request('https://www.worldometers.info/coronavirus/', cb)
   
function cb(error,response,html){
        if(error){
            console.error(error);
        }
        else{
            handleHtml(html);
        }
 }

 function handleHtml(html){
    let selTool = cheerio.load(html)

    let contentArr = selTool('.maincounter-number span')

    // for(let i=0; i<contentArr.length; i++){
    //     let data = selTool(contentArr[i]).text() 
    // }
    let totalCases = selTool(contentArr[0]).text()
    let totalDeaths = selTool(contentArr[1]).text()
    let totalRecoveries = selTool(contentArr[2]).text()

    console.log(totalCases)
    console.log(totalDeaths)
    console.log(totalRecoveries)
 }
