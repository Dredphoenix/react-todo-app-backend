var express = require('express');
var router = express.Router();
var Users =require('../module/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

console .log( req.body);

try{
  let user = new Users(req.body);
  wa
}

});

module.exports = router;
