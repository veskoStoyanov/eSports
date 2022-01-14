const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	uid: {
		type: String,
		required: true,
	},
	amount: {
		type: String,
		required: true,
	},
});

const Bet = mongoose.model('Bet', BetSchema);

module.exports = Bet;
