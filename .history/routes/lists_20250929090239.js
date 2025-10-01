var express = require('express');
var router = express.Router();
var List = require('../module/list');

// Post method

router.post('/',async function(req,res, next){
    console.log(req.body);
    try{
        let list = new List.find();
        await
    }

})