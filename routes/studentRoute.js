const express = require("express");
const { addData, getData } = require("../controller/studentController");
const route = express.Router();

route.post("/addData", addData);
route.get("/getData", getData);

module.exports = route;
