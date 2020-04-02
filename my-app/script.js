const fs = require('fs');
const pug = require('pug')
const express = require('express');
const app = express();
var http = require("http");

const compiledFunction = pug.compileFile('template.pug');

//var nomFichier = process.argv[2];

const http = require('http')
var url = require('url');
var querystring = require('querystring');
var path = require('path');

const port = 3000;

//if (!nomFichier) {
//    console.error('Missing argument!');
//    process.exit(1);
//}

app.use(express.static(path.join(__dirname,'public')));

var donnees = "";
var U1 = '';
var U2 = '';
var ville1 = '';
var ville2 = '';

function lireFichier(fichier){
    fs.readFile(fichier, 'utf8', (err,data) => {
        if (err) {
            console.log(err)
            return
        }
    
        const regex = /\r?\n/;
    
        var dataRegex = data.replace(regex, '');
        var dataArray = dataRegex.split(/;/);
    
        U1 = dataArray[0];
        U2 = dataArray[2];
        ville1 = dataArray[1];
        ville2 = dataArray[3];
    })
}


app.get('/', (req, res) => {
        var params = url.parse(req.url).query;
        
        if (params != null) {
            var paramArray = params.split(/=/);
            var fichier = path.join(process.cwd(), paramArray[1]);
            lireFichier(fichier);
        }
        const generatedTemplate = compiledFunction({
            User1: U1,
            User2: U2,
            Ville1: ville1,
            Ville2: ville2
        })
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(generatedTemplate)
    }
)

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})