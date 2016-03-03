exports.index=function(req,res){
  res.render('default1',{
    title:'Home',
    className : 'home',
    users:['Ashish','Sanket','Ashutosh']
  });
};

exports.about=function(req,res){
  res.render('default1',{
    title:'About Us',
    className : 'about'
  });
};
