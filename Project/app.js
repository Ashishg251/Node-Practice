var routes= require('./routes');
var express =require('express');
var app=express();
app.set('view engine','ejs');

app.locals.pageTitle='Awesome Webite';

app.get('/',routes.index);
app.get('/about',routes.about);

app.get('/me',function(req,res){
  res.send('<h1>@From another route me</h1>');
});

app.get('/who/:name=?',function(req,res){
  var name=req.params.name;
  res.send('<h1>Hello</h1> '+name );
});

app.get('/who/:name=?/:title=?',function(req,res){
  var name=req.params.name;
  var title=req.params.title;
  res.send('<p>Hello</p> '+ name + '<br><p>Title</p>'+title);
  // res.send('<br><p>Title</p> '+title );
});

app.get('*',function(req,res){
  res.send('Bad Route');
});

var server=app.listen(8080,'0.0.0.0',function(){
  console.log('Listening on port 8080 and ip 0.0.0.0');
});
