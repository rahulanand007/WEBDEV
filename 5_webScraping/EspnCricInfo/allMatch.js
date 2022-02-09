const request = require('request')
const cheerio = require('cheerio')

const scoreCardObj = require('./scorecard')

function getAllMatchLink(fullLink){
    request(fullLink, function(err, response, html){
        if(err){
            console.log(error)
        }else{
            extractAllLink(html)
        }
    })
}

function extractAllLink(html){
    let $ = cheerio.load(html)
    let scoreCardArr = $('a[data-hover="Scorecard"]')
    for(let i=0; i<scoreCardArr.length;i++){
        let link = $(scoreCardArr[i]).attr('href')
        fullLink = 'https://www.espncricinfo.com'+link
        //console.log(fullLink)
        scoreCardObj.ps(fullLink)
    }
    
}

module.exports = {
    getAllMatch : getAllMatchLink
}