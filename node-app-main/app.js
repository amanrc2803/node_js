const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello from Docker");
});

app.listen(3003, function(){
    console.log("app listening on 3003")
});


