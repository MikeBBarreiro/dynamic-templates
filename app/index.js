'use strict';

var express = require('express');
var morgan = require('morgan');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/chess', function(req, res){
  res.render('chess');
});

app.get('/add/:x/:y/:b/:c', function(req, res){
  console.log(req.params);
  req.params.x *= 1;
  req.params.y *= 1;
  req.params.b *= 1;
  req.params.c *= 1;
  res.render('sum', req.params);
});
var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening' + port);
});

