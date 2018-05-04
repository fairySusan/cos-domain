var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/a.html',function(req,res){
    res.sendFile(__dirname+'/'+"a.html");
})

var server = app.listen(3001,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})