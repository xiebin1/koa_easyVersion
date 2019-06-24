const originRequest = require('request');
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

function request(url,callback) {
    const option = {
        url:url,
        encoding:null
    }

    originRequest(url,option,callback)
}

for(let i = 100500; i < 100573; i++ ) {

    const url = `https://www.dy2018.com/i/${i}.html`;
    request(url,(err,res,body) => {
        const html = iconv.decode(body, "gb2312");
        console.log(html)
        const $ = cheerio.load(html);
        // console.log($(".title_all h1").text());
    })
}