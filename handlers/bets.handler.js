const { addBet, fetchBets, putBet, deleteBet } = require('../controllers/bets.controller');

const getBets = async (req, res) => {
	let bets = [];
	try {
		bets = await fetchBets(req.params.id);
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(bets);
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

const updateBet = async (req, res) => {
	let bet = [];
	try {
		bet = await putBet(req.body.id, req.body.amount);
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(bet);
};

const removeBet = async (req, res) => {
	let bet = [];
	try {
		bet = await deleteBet(req.query.bet);
	} catch (e) {
		console.log(e);
		return res.status(400).json({ success: false, errors: [''] });
	}

	return res.status(200).json(bet);
};
module.exports = {
	getBets,
	createBet,
	updateBet,
	removeBet,
};
