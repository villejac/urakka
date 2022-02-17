const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const {MongoClient} = require("mongodb")

const app = express()

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const url = "mongodb+srv://ville:ville@cluster0.ewiv8.mongodb.net/db?retryWrites=true&w=majority";

const client = new MongoClient(url,
    {
        useNewUrlParser: true
    })


// haetaan data mongodb:stä
app.get('/api/ilmajoki', (req, res)=> {

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    dbo.collection("ilmajoki").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        //res.status(200).end();
        db.close();
    });
    });
})

// haetaan data mongodb:stä
app.get('/api/seinajoki', (req, res)=> {

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    dbo.collection("seinajoki").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        //res.status(200).end();
        db.close();
    });
    });
})

// haetaan data mongodb:stä
app.get('/api/parkano', (req, res)=> {

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    dbo.collection("parkano").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        //res.status(200).end();
        db.close();
    });
    });
})

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)