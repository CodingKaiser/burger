var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  burger.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], () => {
    res.redirect("/");
  });
});

router.put("/", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    sleepy: req.body.sleepy
  }, condition, () => {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
