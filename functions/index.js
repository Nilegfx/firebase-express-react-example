const functions = require('firebase-functions');
const express = require('express');

const api = express();
const main = express();

api.get('/name', (req, res) => {
  res.json({name: 'nile'});
});

main.use('/api', api);

exports.main = functions.https.onRequest(main);
