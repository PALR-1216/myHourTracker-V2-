const express = require('express')
const app = express()
const body_parse = require('body-parser')
const path = require('path')
const sqlite3 = require('sqlite3').verbose();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

var urlencodedParser = body_parse.urlencoded({extended:false});


let db = new sqlite3.Database(':memory:',sqlite3.OPEN_READWRITE, (err) => {
    if(err) throw err;

    console.log("connected to a in-memory database")
})


db.serialize( () => {
    
})





app.listen(3000, () => {
    console.log("server running")
})