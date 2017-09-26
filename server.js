const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');

// const db          = require('./config/db');

const app         = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//   require('./app/routes')(app, database);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });               
// })

app.listen(port, () => {
    console.log('We are live on ' + port);
  });  

app.get('/', (req, res) => {
	  res.send("Hello World!")
	})

app.get('/test', (req, res) => {
	  res.send("Hello TESTING!")
	})