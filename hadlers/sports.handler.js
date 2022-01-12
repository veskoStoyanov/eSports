const {
	getAllSports,	
} = require('../controllers/sports.controller');

const getSports = async (_, res) => {
	let sports = [];
	try {
		sports = await getAllSports();
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(sports);
};
module.exports = {
	getSports,
};
