var express = require('express'); 
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('helo', {
    title: "Helo", 
    input1: '',
    input2: '',
    input3: ''
  }); 
});

router.post('/', function(req, res, next) {
  var input1 = req.body.input1;
  var input2 = req.body['input2'];
  var input3 = req.body['input3'];
  res.render('helo', {
    title: 'Helo', 
    input1: input1,
    input2: input2,
    input3: input3,
  });
});

module.exports = router;
