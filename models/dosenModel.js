const mongoose = require("mongoose");

const dosenSchema = new mongoose.Schema({
	nidk: {
		type: Number,
	},
	nama: {
		type: String,
	},
	mata_kuliah: {
		type: String,
	},
});

module.exports = mongoose.model("Dosen", dosenSchema);
