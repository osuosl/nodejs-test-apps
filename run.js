var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Express Success!');
  res.send('Express Success!');
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Express app listening on port %s', port);
});
