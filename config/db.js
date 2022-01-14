const mongoose = require('mongoose');
const { dbUrl } = require('.');

const connectDB = async () => {
	console.log(dbUrl)
	const connection = await mongoose.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
