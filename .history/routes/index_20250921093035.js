var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
   name:"hello",
   age:,
   DOB:2002.     
  })
});

module.exports = router;
