const mongoose = require('mongoose');
const { router } = require('../app');
const userSchema= new mongoose.Schema({
    action:{type:String}
})
const List= mongoose.model('lists',userSchema);
module.exports= router