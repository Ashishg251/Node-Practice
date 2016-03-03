var http=require('http');
var myServer=http.createServer(function(req,res){

  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write('Hello');
  res.end();

});

myServer.listen(8080,"0.0.0.0");
