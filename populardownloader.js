const request = require('request-promise');
const path = require('path');
const fs = require('fs');

let downloadsPath = path.join(__dirname, './downloads/media.js');

// console.log(downloadsPath);


request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err);
    // let allItems = [];

    JSON.parse(body).data.children.forEach(item => {
        if (path.extname(item.data.url)) {
            request.get(item.data.url, { encoding: 'binary' }, (err, res) => {
                let fileExt = path.extname(item.data.url);
                if (err) console.log(err);
            //     fs.writeFile(downloadsPath + path.basename(item.data.url), res.body, { encoding: 'binary' })
            // })}

            //change this to download the files, not the names:
            fs.appendFileSync(downloadsPath, `${item.data.id}${fileExt} \n`, { encoding: 'binary' }, err => {
                if(err) return console.log(err);
            })
            
        }
            )}

    })

})