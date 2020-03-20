const fs = require('fs');
const pug = require('pug')

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


const server = http.createServer(
    (request, res) => {
        //var urlpath = url.parse(request.url).pathname;
        //fs.exists(localpath, function(result) { console.log(localpath)});
        var params = url.parse(request.url).query;
        
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

server.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})