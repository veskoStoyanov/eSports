const { Bet } = require('../models');

const addBet = (data) => Bet.create(data);

module.exports = {
    addBet
};