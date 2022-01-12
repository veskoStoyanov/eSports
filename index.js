const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');

// Config dotev
require('dotenv').config({
	path: './config/config.env',
});

app.use(morgan('dev'));
app.use(cors());
// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// OpenApi
require('./hadlers')(app);
const apiSpec = require('./hadlers/openapi.json');
app.use(
	'/swagger',
	swaggerUi.serve,
	swaggerUi.setup(apiSpec, {
		swaggerOptions: {
			syntaxHighlight: false,
			displayRequestDuration: true,
		},
	})
);

const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
