const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
/**
 * Db Server Connection
 */

const URI = process.env.DB_URI;

mongoose.connect(URI, (err) => {
  if (err) {
    console.log("DB Not Connected");
  } else {
    console.log("DB Connected Successfully");
  }
});

module.exports = mongoose;
