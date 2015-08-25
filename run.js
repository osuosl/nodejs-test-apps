var http = require('http');

function onRequest(request, response) {
  console.log('Success!');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Success!');
  response.end();
}

console.log('starting server on port 8888');
http.createServer(onRequest).listen(8888);
