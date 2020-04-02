const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('view/template.pug');
const affichageFunction = pug.compileFile('view/affichage.pug');

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/TP_WEB', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
const db = mongoose.connection;
const citiesSchema = new mongoose.Schema({
    name: String
});

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Cities = mongoose.model("Cities", citiesSchema);

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function(){
    // We're connected!
});

// GET /
app.get("/", function(req, res) {
    const generatedTemplate = compiledFunction()
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(generatedTemplate)
} );

// GET /cities
app.get("/cities", function(req, res) {
    Cities.find(function(err, cities) {
        if (err) return console.error(err);
        
        const affichageTemplate = affichageFunction({
            Contenu: cities
        })

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(affichageTemplate)
    });
    
    
} );

// POST /cities
app.post("/city", urlencodedParser, function(req, res) {
    const city = new Cities({ name : req.body.ville});

    city.save(function(err) {
        if (err) return console.error(err);
        res.writeHead(301,
            {Location: '/cities'}
          );
          res.end();
    });
});

// PUT /city/:id
app.put("/city/:id", urlencodedParser, function(req, res) {
    Cities.findById(req.body.id, function(err, city) {
        if (err) return console.error(err);
        city.name = req.body.ville;
        city.save(function(err) {
            if (err) return console.error(err);
            res.json({message : 'Bravo, mise à jour des données OK'});
        })
    })
} );

// DELETE /city/:id
app.delete("/city/:id", urlencodedParser, function(req, res) {
    Cities.remove({_id: req.body.id}, function(err, city) {
        if (err) return console.error(err);
        res.json({message : 'Bravo, ville supprimée'});
    })
} );

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})