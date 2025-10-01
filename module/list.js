const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  action: { type: String, required: true, unique: true },
});

const List = mongoose.model("lists", listSchema);

module.exports = List;
