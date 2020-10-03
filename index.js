const express = require('express');
const csvToJson = require('convert-csv-to-json');

const csvFileName = 'data/stars.csv';
const starsJson = csvToJson.fieldDelimiter(',').getJsonFromCsv(csvFileName);

const app = express();
const port = process.env.PORT || 3000;

app.get('/distance', (req, res) => {
  res.send(starsJson);
})

app.get('/', (req, res) => {
  res.send("Welcome to Rohtate API")
})

app.listen(port, () => {
  console.log("Server running on " + port);
})