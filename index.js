var experss= require('express');
var app = experss();
app.set('port',process.env.PORT || 3000);
// 404页面
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - NOt Found');
});
// 500页面
app.use(function(err,req,res,next){
  console.log(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
  console.log('express started on http://2016.html5dw.cn'+ app.get('port') +';press Ctrl-C to terminate.')
});
