const mongoose = require("mongoose");
const { Schema } = mongoose;

//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
//userSchema.plugin(uniqueValidator,{message:"Email allready in used"});
const User = mongoose.model("user", userSchema);
module.exports = User;
