const { urls, dateFormatter } = require('../config');

const { fetch, parseXmlToJSON, formatDate } = require('../modules');

const getAllSports = async () => {
	try {
		const { data } = await fetch(urls.sports);
		const result = await parseXmlToJSON(data);

		const sports = result?.XmlSports?.Sport[0];

		let matches = [];
		sports.Event.forEach((event) => {
			const currMatches = event['Match'].reduce((accMatches, currMatches) => {
				const match = {
					isLive: currMatches['$']['IsLive'],
					name: currMatches['$']['Name'],
					matchType: currMatches['$']['MatchType'],
					startDate: formatDate(
						currMatches['$']['StartDate'],
						dateFormatter.sports
					),
					sport: event['$'].Name,
				};

				match.bets = !currMatches.Bet
					? []
					: currMatches.Bet[0].Odd.map((odd) => odd['$'].Value);

				return [...accMatches, match];
			}, []);

			matches.push(...currMatches);
		});

		matches = matches.sort(
			(a, b) => new Date(a.startDate) - new Date(b.startDate)
		);

		return { name: sports['$']['Name'], matches };
	} catch (e) {
		throw new Error(e);
	}
};

module.exports = {
	getAllSports,
};
