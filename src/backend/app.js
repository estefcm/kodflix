const express = require('express');
const app = express();
const getGallery = require('./shows');
const port = 3001;

app.get('/rest/shows', (req, res) => {
  res.send(getGallery());
});
// app.get('/' ,(req, res) => res.send('HOLA'))

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});