const { getAllSports } = require('../controllers/sports.controller');
const { addBet, fetchBets } = require('../controllers/bets.controller');

const getBets = async (_, res) => {
	let bets = [];
	try {
		bets = await fetchBets();
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(sports);
};

const createBet = async (req, res) => {
	let bet = [];
	try {
		bet = await addBet({ ...req.body, uid: req.params.id });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(bet);
};

const updateBet = async (_, res) => {
	let sports = [];
	try {
		sports = await getAllSports();
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(sports);
};

const removeBet = async (_, res) => {
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
	getBets,
	createBet,
	updateBet,
	removeBet,
};
