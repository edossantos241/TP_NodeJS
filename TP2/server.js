const express = require('express');
const app = express();
var path = require('path');
const pug = require('pug');
const fs = require('fs');
var bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

const compiledFunction = pug.compileFile('view/template500.pug');

const compiledFunctionSucces = pug.compileFile('view/templateSucces.pug');

app.get('/', function (req, res){
    fs.readFile("cities.json", 'utf8', (err,data) => {
        if (err) {
            const generated500Template = compiledFunction();
            res.status(500).send(generated500Template);
            return
        }

        const generatedTemplateSucces = compiledFunctionSucces({
            data: data
        })
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(generatedTemplateSucces)
    })
})

app.post('/city', urlencodedParser, function(req, res) {
    fs.stat('cities.jon', function(err) {
        if (err) {
            fs.appendFile('cities.json', '', (err) => {
                if (err) console.log("création du fichier JSON");
              });
        }
    });

    var monJson = JSON.parse(fs.readFileSync('cities.json', 'utf8'));
    var villes = monJson['cities'];

    for (var i = 0; i < villes.length; i++) {
        if (villes[i]['name'] == req.body.ville){
            res.statusCode = 500
            const generated500Template = compiledFunction();
            res.status(500).send(generated500Template);
            return
        } 
      };

      let city = {
        "id" : uuidv4(),
        "name" : req.body.ville
     }

    monJson['cities'].push(city);
      
     let donnees = JSON.stringify(monJson)
     fs.writeFile('cities.json', donnees, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      const generatedTemplateSucces = compiledFunctionSucces({
        data: donnees
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(generatedTemplateSucces)
    })

app.put('/city/:id', urlencodedParser, function(req, res) {
    fs.stat('cities.jon', function(err) {
        if (err) {
            fs.appendFile('cities.json', '', (err) => {
                if (err) console.log("création du fichier JSON");
                });
        }
    });

    var monJson = JSON.parse(fs.readFileSync('cities.json', 'utf8'));
    var villes = monJson['cities'];

    for (var i = 0; i < villes.length; i++) {
        if (villes[i]['name'] == req.body.ville){
            res.statusCode = 500
            const generated500Template = compiledFunction();
            res.status(500).send(generated500Template);
            return
        } 
    };

    for (var i = 0; i < villes.length; i++) {
        if (villes[i]['id'] == req.body.id){
            villes[i]['name'] = req.body.ville
        } 
    };

    let donnees = JSON.stringify(monJson)
     fs.writeFile('cities.json', donnees, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    
    const generatedTemplateSucces = compiledFunctionSucces({
        data: donnees
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(generatedTemplateSucces)
    })

app.delete('/city/:id', urlencodedParser, function(req, res) {
    fs.stat('cities.jon', function(err) {
        if (err) {
            fs.appendFile('cities.json', '', (err) => {
                if (err) console.log("création du fichier JSON");
                });
        }
    });

    var monJson = JSON.parse(fs.readFileSync('cities.json', 'utf8'));
    var villes = monJson['cities'];

    for (var i = 0; i < villes.length; i++) {
        if (villes[i]['id'] == req.body.id){
            monJson['cities'].splice(i, 1);
        } 
    };

    let donnees = JSON.stringify(monJson)
        fs.writeFile('cities.json', donnees, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    
    const generatedTemplateSucces = compiledFunctionSucces({
        data: donnees
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(generatedTemplateSucces)
    })


app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})