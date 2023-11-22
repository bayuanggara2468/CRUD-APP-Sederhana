const mongsoose = require("mongoose");

module.exports = async () => {
	try {
		await mongsoose.connect(process.env.MONGO_URL);
		console.log("Database Connected");
	} catch (error) {
		console.log(err);
	}
};
