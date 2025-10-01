var express = require('express');

var router = express.Router();


router.get('/',function(req,res,next){

 res.json({
    name:'product',
    category:'electronics'
 })

});


router.post('/:name', function(req, res, next) {
  res.json({
    name: req.params.name
  });
});


})

module.exports = router; 