
const hbs = require('hbs');
const express = require('express');
require('dotenv').config();

const app = express()
const port=process.env.PORT;

// handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// servir contenido estatico
app.use( express.static('public'));
 
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Albert',
    titulo: 'Curso Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Albert',
    titulo: 'Curso Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Albert',
    titulo: 'Curso Node'
  });
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})