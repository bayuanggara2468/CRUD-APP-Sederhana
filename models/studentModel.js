const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
		npm: {
			type: Number,
		},
		nama: {
			type: String,
		},
		fakultas: {
			type: String,
		},
		jurusan: {
			type: String,
		},
		semester: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Student", studentSchema);
