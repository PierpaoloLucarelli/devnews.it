var express = require('express');
var router = express.Router();
var posts = require("./posts.js");
var news = require("./news.js");

// servira la home page
router.get('/', function(req, res) {
    res.send('Questa è la home page');
});

router.use("/posts", posts);
router.use("/news", news);

module.exports = router;
