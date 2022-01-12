const { urls } = require('../config');

const { fetch, parseXmlToJSON } = require('../modules');

const getAllSports = async () => {
	try {
		const { data } = await fetch(urls.sports);
		const result = await parseXmlToJSON(data);

		const sports = result?.XmlSports?.Sport[0];
		const events = sports.Event.reduce((accEvents, currEvents) => {
			const matches = currEvents['Match'].reduce((accMatches, currMatches) => {
				const match = {
					isLive: currMatches['$']['IsLive'],
					name: currMatches['$']['Name'],
					matchType: currMatches['$']['MatchType'],
					startDate: currMatches['$']['StartDate'],
				};

				match.bets = [1.5, 1.5]

				// match.bets = currMatches.Bet
				// 	? currMatches.Bet.reduce((accBets, currBets) => {
				// 			const odds = currBets.Odd.map((odd) => ({
				// 				name: odd['$']['Name'],
				// 				value: odd['$']['Value'],
				// 				id: odd['$']['ID'],
				// 			}));

				// 			const bet = {
				// 				isLive: currBets['$']['IsLive'],
				// 				name: currBets['$']['Name'],
				// 				id: currBets['$']['ID'],
				// 				odds,
				// 			};

				// 			return [...accBets, bet];
				// 	  }, [])
				// 	: [];

				return [...accMatches, match];
			}, []);

			const event = {
				isLive: currEvents['$']['IsLive'],
				name: currEvents['$']['Name'],
				id: currEvents['$']['ID'],
				categoryId: currEvents['$']['CategoryID'],
				matches,
			};

			return [...accEvents, event];
		}, []);

		return { name: sports['$']['Name'], events };
	} catch (e) {
		throw new Error(e);
	}
};

module.exports = {
	getAllSports,
};
