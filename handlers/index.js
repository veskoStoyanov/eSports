const { initialize } = require('express-openapi');

const Sports = require('./sports.handler');
const Bet = require('./bets.handler');
const apiHandlers = { ...Sports, ...Bet };
const apiSpecFile = require('./openapi.json');

module.exports = (app) => {
	initialize({
		app,
		apiDoc: apiSpecFile,
		operations: apiHandlers,
	});

	return app;
};
