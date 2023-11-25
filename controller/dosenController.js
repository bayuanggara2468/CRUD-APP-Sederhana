const dosenModel = require("../models/dosenModel");
const { responseDefault } = require("../utils/responseMessage");
const { createValidation } = require("../validation/dosenValidation");

// Add Data
const addData = async (req, res) => {
	try {
		// Validation Data Exist
		const dataExist = await dosenModel.findOne({ nidk: req.body.npm });
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

// Get Data By Id
const getDataById = async (req, res) => {
	try {
		// Get ID Not Exist
		const ID = await dosenModel.findOne({ _id: req.params.id });
		if (!ID) {
			return res.status(400).json({
				message: responseDefault.ID_NOT_FOUND,
			});
		}

		const response = await dosenModel.findById(req.params.id);
		res.status(200).json({
			data: response,
		});
	} catch (error) {
		console.log(error);
	}
};

// Get Data By Id And Update
const updateData = async (req, res) => {
	const id = req.params.id;
	const body = req.body;

	try {
		// Data Not Found
		const ID = await dosenModel.findOne({ _id: req.params.id });
		if (!ID) {
			return res.status(400).json({
				message: responseDefault.ID_NOT_FOUND,
			});
		}

		await dosenModel.findByIdAndUpdate({ _id: id }, { $set: body });
		res.status(200).json({
			message: responseDefault.DATA_UPDATED,
		});
	} catch (error) {
		console.log(error);
	}
};

// Get Data By id Delete Data
const deleteData = async (req, res) => {
	try {
		await dosenModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			message: responseDefault.DATA_DELETED,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addData,
	getData,
	getDataById,
	updateData,
	deleteData,
};
