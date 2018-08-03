const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const rc = require('./realEstateController');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
})

app.get('/api/realestate/', rc.getAllHouses);
app.post('/api/realestate/', rc.addHouse);
app.delete('/api/realestate/:id', rc.deleteHouse);
// app.put();
// app.delete();

const server_port = 4007;
app.listen(server_port, () => {
  console.log('Server running on port: ', server_port);
})
