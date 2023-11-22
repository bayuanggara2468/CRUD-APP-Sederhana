const studentModel = require("../models/studentModel");
const { responseDefault } = require("../utils/responseMessage");
const { createValidation } = require("../validation/studentValidation");

// Add Data
const addData = async (req, res) => {
	try {
		// Validation Data Exist
		const dataExist = await studentModel.findOne({ npm: req.body.npm });
		if (dataExist) {
			return res.status(400).json({
				message: responseDefault.DATA_EXIST,
			});
		}

		// Validation Add Data
		const { error } = await createValidation(req.body);
		if (error) {
			return res.status(400).json({
				message: error.details[0].message,
			});
		}

		const response = await studentModel.create(req.body);
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
		const respon = await studentModel.find();
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
