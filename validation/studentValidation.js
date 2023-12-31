const Joi = require("joi");

// Create Validation
const createValidation = (data) => {
	const studentschema = Joi.object({
		npm: Joi.number().required(),
		nama: Joi.string().required(),
		fakultas: Joi.string().required(),
		jurusan: Joi.string().required(),
		semester: Joi.string().required(),
	});
	return studentschema.validate(data);
};

module.exports = {
	createValidation,
};
