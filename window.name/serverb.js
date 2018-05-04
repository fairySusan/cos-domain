var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/b.html',function(req,res){
    res.sendFile(__dirname+'/'+"b.html");
})

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})