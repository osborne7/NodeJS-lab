const path = require('path');
const fs = require('fs');

console.log(__dirname);

let chirps = [
    {
        message: 'hello there', 
        author: 'Nadia'
    },
    {
        message: 'how are you?',
        author: 'Natalie' 
    },
    {
        message: 'nice to see you',
        author: 'Justine'
    },
    {
        message: 'good night', 
        author: 'Alex'
    },
    {
        message: 'see you later',
        author: 'Rene'
    }
    ];

    let chirpsPath = path.join(__dirname, '../chirps.json');

    //write chirps.json file
    fs.writeFile(chirpsPath, JSON.stringify(chirps), err => {
        // console.log(chirps);
        if(err) return console.log(err);
        // console.log(chirps.toString());
    })

    //read chirps.json and write it to console
    fs.readFile(chirpsPath, { encoding: 'utf-8'}, (err, data) => {
        if(err) return console.log(err);
        console.log(data);
    })

