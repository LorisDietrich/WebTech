//const express = require('express')
const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//support parsing of application/x-www-form-urlencoded post data
//const app = express()

const mysql = require('mysql');
let con = mysql.createConnection({
	host: '10.25.10.21',
	user: 'g8',
	password: 'yBvxeR3Max8O8eJl',
	database: 'g8',

	/*
host: "localhost",
user: "root",
password: "",
database: "test"
*/
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
    });

con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
});
app.get('/', function (req, res) {
	res.send('Hello World! ');
});
app.get('/user', function (req, res) {
	con.query('SELECT * FROM user', (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

app.get('/item', function (req, res) {
	con.query('SELECT * FROM item', (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

app.get('/user/:id', function (req, res) {
	con.query(
		`select * from User where id=${req.params.id}`,
		[req.params.id],
		function (err, results) {
			if (err) throw err;
			res.send(results);
		},
	);
});


app.post('/addPersons', function (req, res) {
  var postData = req.body;
  con.query('INSERT INTO User SET ?', postData, function (error, results, fields) {
          if (error) throw error;
          res.send(results);
      },
  );
});
      


    //UPDATE
app.post('/updatePerson2', function (req, res) {
  con.query(
      'UPDATE User SET name=?,lastName=?,age=? where id=?',
      [req.body.name, req.body.lastName, req.body.age, req.body.id],
      function (error, results, fields) {
          if (error) throw error;
          res.send(results);
      },
  );
});
      


    //DELETE
app.delete('/deletePerso', function (req, res) {
  console.log(req.body);
  con.query(
      'DELETE FROM User WHERE id=?', 
      [req.body.id],
      function (error, results, fields) {
          if (error) throw error;
          res.send('Record has been deleted!');
      },
  );
});
      

app.listen(3000, function () {
	console.log('Example app listening on port3000! ');
});