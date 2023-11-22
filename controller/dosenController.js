const dosenModel = require("../models/dosenModel");
const { responseDefault } = require("../utils/responseMessage");

// Add Data
const addData = async (req, res) => {
	try {
		const response = await dosenModel.create(req.body);
		res.status(201).json({
			message: responseDefault.CREATED_DATA,
			data: response,
		});
	} catch (error) {
		console.log(error);
	}
};

// Get Data
const getData = async (req, res) => {
	try {
		const respon = await dosenModel.find();
		res.status(200).json({
			data: respon,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addData,
	getData,
};
