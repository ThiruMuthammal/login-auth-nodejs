const express = require("express");

const route = express.Router();

const User = require("../models/user.model");

route.post("/user", (req, res) => {
  const data = new User({
    Name: req.body.Name,
    email: req.body.email,
  });
  data.save();
  res.send(data);
});

module.exports = route;
