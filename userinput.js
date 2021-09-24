//npm init, npm install express --save

const express = require('express');
const app = express();
const mm = require('music-metadata');

mm.parseFile('./Rick Astley - Never Gonna Give You Up (Official Music Video)_50k.mp3').then(metadata => {
    try {
        var information = metadata;
        app.get('/', function(req, res){
            res.send(information);
        })  
    } catch (error) {
        console.error(error.message)
    }
    
})

app.listen(3000, function() {
    console.log("Server started")
});
