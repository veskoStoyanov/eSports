const urls = {
	sports:
		'https://sports.ultraplay.net/sportsxml?clientKey=1bf3f918-fa27-4400-8815-d14a130f6851&sportId=2357',
};

const dateFormatter = {
	sports: 'DD MMM HH:mm'
}

const dbUrl = 'mongodb://localhost:27017/sports';

module.exports = {
	urls,
	dateFormatter,
	dbUrl
};
