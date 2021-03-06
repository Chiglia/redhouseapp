const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;

const server = express()
  
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/progetti', (req, res) => res.render('pages/progetti'))
  .get('/chisiamo', (req, res) => res.render('pages/chisiamo'))
  .get('/valori', (req, res) => res.render('pages/valori'))
  .listen(PORT, () => console.log(`è qui: ${ PORT }`));

const io = socketIO(server);

setInterval(() => io.emit('time', new Date().getHours()+2 + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + " GTM+0200 (UTC)"), 1000);

