const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/distance', (req, res) => {
  res.send([
    {system: "Alpha Centauri",
  distance: "4.2441"},
  {system: "Barnard's Star",
  distance: "5.9577"},
  {system: "Luhman 16",
  distance: "6.5029"}
  ])
})

app.get('/', (req, res) => {
  res.send("Welcome to Rohtate API")
})

app.listen(port, () => {
  console.log("Server running on " + port);
})