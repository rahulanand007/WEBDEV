const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const allMatchObj = require('./allMatch')

let iplPath = path.join(__dirname, "IPL")    // __dirname gets the name of parent directory
dirCreator(iplPath)
function dirCreator(filePath){
    if(fs.existsSync(filePath)==false){
        fs.mkdirSync(filePath)
    }
}


request(url,cb)

function cb(err, response, html){
    if(err){
        console.log(err)
    }else{
        extractLink(html)
    }
}

function extractLink(html){
    let $ = cheerio.load(html)
    let anchorElem = $('a[data-hover="View All Results"]')
    let link = anchorElem.attr('href')
    let fullLink = 'https://www.espncricinfo.com'+link
    
    allMatchObj.getAllMatch(fullLink)
}

