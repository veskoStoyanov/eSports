const { Bet } = require('../models');

const addBet = (data) => Bet.create(data);

const fetchBets = (uid) => Bet.find({ uid });

const putBet = async (id, amount) => {
	const bet = await Bet.findById(id);
	bet.amount = amount;

	return bet.save();
};

const deleteBet = async (id) => Bet.findByIdAndDelete(id);

module.exports = {
	addBet,
	fetchBets,
    putBet,
	deleteBet
};
