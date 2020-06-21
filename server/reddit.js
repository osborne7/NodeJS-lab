const request = require('request');
const path = require('path');
const fs = require('fs');

let redditPath = path.join(__dirname, '../popular-articles.json');


let newArray = [];


request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);


    JSON.parse(body).data.children.forEach(item => {

                let newItem = {
            title: item.data.title,
            url: item.data.url,
            author: item.data.author
        }

        newArray.push(newItem);

    })
    console.log(newArray);
    fs.writeFile(redditPath, JSON.stringify(newArray), err => {
        if (err) console.log(err);
    });

    })