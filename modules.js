const xml2js = require('xml2js').parseString;
const axios = require('axios');

const parseXmlToJSON = (data) =>
	new Promise((resolve, reject) => {
		xml2js(data, (err, result) => {
			if (err) {
				reject(err );
			}

			resolve(result);
		});
	});
	
const fetch = (url, method = 'GET', data) => {
	const options = {
		method,
		url,
	};

	if (data) {
		options.data = data;
	}

	return axios(options);
};

module.exports = {
	parseXmlToJSON,
	fetch,
};
