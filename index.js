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
            con.query("SELECT *FROM sampleDB",function(error, rows, fields){
            if (!!err){
  console.log("ERROR in the query");
}else{
    console.log("Connected! to query");
 }
        
        
        
        
    });
            
            }
});
app.listen(5000);