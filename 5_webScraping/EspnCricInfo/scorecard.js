const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')

request(url,function(err,response,html){
    if(err){
        console.log(error)
    }else{
        extractMatchDetails(html)
    }
})

function extractMatchDetails(html){
    let $ = cheerio.load(html)
    let descString = $('.header-info .description')
    let descStringArr = descString.text().split(',')
    let venue = descStringArr[1].trim()   //Trim function remoes the white spaces
    let date = descStringArr[2].trim() 
    
    let result = $('.match-header .status-text').text()
    

    let innings = $('.card.content-block.match-scorecard-table>.Collapsible')
    let htmlString = ''

    for(let i=0;i<innings.length;i++){
        htmlString += $(innings[i]).html()
    }
    console.log(htmlString)
}