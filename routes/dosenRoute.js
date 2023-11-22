const express = require("express");
const route = express.Router();
const { addData, getData } = require("../controller/dosenController");

route.post("/addData", addData);
route.get("/getData", getData);

module.exports = route;
