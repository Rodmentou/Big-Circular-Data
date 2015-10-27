var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  server = require('http').createServer(app);


var port = 8080;
var env = 'dev';
var places = [];
places.ect = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

var api = express.Router();


api.route('/busstop')
.get( function (req, res) {

});



api.get('/api', function (req, res) {
  res.send('API route working');
});

api.get('/busstop/:whichStop', function (req, res) {
  res.json(places[req.params.whichStop]);
});

api.get('/me', function (req, res) {
  res.json({success: true, message: 'You? You are beautiful. <3'});
  console.log("This is sad, just for GitHub streak.");
});

api.post('/busstop/:whichStop', function (req, res) {
  var stop = req.body;
  var place = req.params.whichStop
  places[place].push(stop);
  console.log(places);
  res.json({success: true, message: 'Nothing to say'});
});

app.use('/api', api);

server.listen(port, function (){
  console.log('All working as expected on ' + port + ' at ' + env + '.');
});
