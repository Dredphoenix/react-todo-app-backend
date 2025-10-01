const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    action:{type:String}
})
const List= mongoose.model('lists',userSchema);
module.exports= 