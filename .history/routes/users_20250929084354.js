var express = require('express');
var router = express.Router();
var Users =require('../module/user')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    let user =await Users.find();
    res.json{}
  }
});

router.post('/',async function(req, res, next) {

console.log(req.body);

try{
  let user= new Users(req.body);
  await user.save();

  res.json({
    success: true,
    data:user
  })
}catch(e){
  res.json({
    success:false,
    err:e
  })
} 
});

module.exports = router;
