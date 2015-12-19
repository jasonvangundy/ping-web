var express = require('express');
var redis = require('redis');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var client = redis.createClient();
  client.on('connect', function() {
    client.set('now', Date(), function(err, reply) {
      console.log(reply);
    });
  });

  client.get('now', function(err, reply) {
    console.log(reply);
    res.render('index', { title: reply });
  });
});

module.exports = router;
