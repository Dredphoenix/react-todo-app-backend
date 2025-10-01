var express = require('express');
var router = express.Router();

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

  res.send()
});

module.exports = router;
