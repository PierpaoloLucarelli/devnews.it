var express = require('express');
var router = express.Router();


router.get("/", function(req,res){
    res.send("lista dei nostri post");
});

module.exports = router;
