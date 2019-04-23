const seconda = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var mysql      = require('mysql');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/progetti', (req, res) => res.render('pages/progetti'))
  .get('/chisiamo', (req, res) => res.render('pages/chisiamo'))
  .get('/valori', (req, res) => res.render('pages/valori'))
  .get('/seconda', (req, res) => res.send(seconda()))  
  .listen(PORT, () => console.log(`è qui: ${ PORT }`))

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sampleDB'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");    
} else {
    console.log("Error connecting database ... ");    
}
});

app.get("/seconda",function(req,res){
connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);