var express = require('express');
var router = express.Router();
var users =require('../module/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name:"Phoenix",
    age:21,
    DOB:2004
  });
});

router.post('/', function(req, res, next) {
 console.log(req.body)

  res.json({
    name:"Pix",
  
  });
});

module.exports = router;
