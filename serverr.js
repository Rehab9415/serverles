var express = require('express');
var express = express();

app.get('/', function(req,res){
    res.send('Hello word!');
});

app.listen(8080,function(){
    console.log("Server started @ 8080");
})