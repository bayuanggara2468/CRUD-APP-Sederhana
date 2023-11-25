const Joi = require("joi");

// Create Validation
const createValidation = (data) => {
	const dosenschmea = Joi.object({
		nidk: Joi.number().required(),
		nama: Joi.string().required(),
		mata_kuliah: Joi.string().required(),
	});
	return dosenschmea.validate(data);
};

module.exports = {
	createValidation,
};
