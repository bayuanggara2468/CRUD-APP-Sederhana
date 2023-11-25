const express = require("express");
const route = express.Router();
const {
	addData,
	getData,
	getDataById,
	updateData,
	deleteData,
} = require("../controller/dosenController");

route.post("/addData", addData);
route.get("/getData", getData);
route.get("/getDataById/:id", getDataById);
route.put("/editData/:id", updateData);
route.delete("/deleteData/:id", deleteData);

module.exports = route;
