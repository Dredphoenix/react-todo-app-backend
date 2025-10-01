const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    action:{type:String}
})
const List= mongoose.