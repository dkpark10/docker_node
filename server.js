'use strict'
const app = require('express')();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('docker node server');
});

app.listen(port, host, () => {
  console.log(`서버 시작 ${port}`);
})