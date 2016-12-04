var express = require('express'); 
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('game', {
  }); 
});

router.post('/', function(req, res, next) {
  var room = req.body.room;
  var name = req.body.name;
  res.render('game', {
    room: room,
    name: name
  }); 
});

module.exports = router;
