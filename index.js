const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/progetti', (req, res) => res.render('pages/progetti'))
  .get('/chisiamo', (req, res) => res.render('pages/chisiamo'))
  .get('/valori', (req, res) => res.render('pages/valori'))
  .get('/cool', (req, res) => res.send(cool()))  
  .listen(PORT, () => console.log(`è qui: ${ PORT }`))


var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({   
  host: "localhost",
  user: "myusername",
  password: "mypassword"
  database:'sampleDB'    
});

con.connect(function(err) {
  if (!!err){
  console.log("ERROR");
}else{
    console.log("Connected!");
 }
    app.get('/',function(req,resp)){
            con.query("SELECT *FROM tabellabella",function(error, rows, fields){
            if (!!err){
  console.log("ERROR in the query");
}else{
    console.log("Connected! to query");
 }
        
        
        
        
    });
            
            }
});
app.listen(5000);