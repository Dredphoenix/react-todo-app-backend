const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type:String},
  age:{type:String},
  email:{type:String ,unique:true}
});

const User =mongoose.model('users',userSchema);

module.exports=User;