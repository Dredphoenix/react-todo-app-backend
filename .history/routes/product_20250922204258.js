var express = require('express');

var router = express.Router();


router.get('/',function(req,res,next){

 res.json({
    name:'product',
    category:'electronics'
 })

})

module.exports = router; 