var http = require("http");

// Create server and pass a callback to be executed for each connection
var app = http.createServer(function (req, res) {

  // Send a generic response for every request
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello world\n");

});

// Start listening to connections
app.listen(8080,"0.0.0.0");
