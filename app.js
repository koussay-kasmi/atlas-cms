const http = require('http');
const path = require('path');
const express = require('express');
const mongodb = require("mongoose");
const dbconnection = require("./config/db.json");

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(express.json());

app.get('/', (req,res) =>{
    res.render('index',{title:'Homepage'}); // Renders views/index.twig
})

const server = http.createServer(app);

async function startServer(){
    try {
        await mongodb.connect(dbconnection.url);
        console.log("database connected succesfuly");
        server.listen(3000);
        console.log("server is running");
    }catch(err){
        console.error("Failed to connect to the database");
    }
}
startServer();