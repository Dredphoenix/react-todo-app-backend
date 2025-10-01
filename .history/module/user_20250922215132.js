const mongoose = require('mongoose');

const users = new mongoose.Schema({
  name: {type:String},
  age:{type:String}
});