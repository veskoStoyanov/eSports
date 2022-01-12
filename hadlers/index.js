const { initialize } = require('express-openapi');

const Sports = require('./sports.handler');

const apiHandlers = { ...Sports };
const apiSpecFile = require('./openapi.json');

module.exports = (app) => {
	initialize({
		app,
		apiDoc: apiSpecFile,
		operations: apiHandlers,
	});

	return app;
};
