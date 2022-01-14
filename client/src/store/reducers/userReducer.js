import {
	CHANGE_USER_STATE,
	CHANGE_USER_BETS_STATE,
	UPDATE_BET_STATE,
	REMOVE_BET,
	ADD_BET,
} from '../../constants/store';

const initialState = {
	user: null,
	bets: null,
};

const changeUserState = (state, payload) => ({
	...state,
	user: payload,
});

const changeUserBetsState = (state, payload) => ({
	...state,
	bets: payload,
});

const updateBetState = (state, payload) => {
	const index = state.bets.findIndex(
		(bet) => bet._id.toString() === payload._id.toString()
	);

	const bets = [...state.bets];
	bets[index] = payload;

	return { ...state, bets };
};

const removeBet = (state, payload) => {
	const bets = state.bets.filter(
		(bet) => bet._id.toString() !== payload.toString()
	);

	return { ...state, bets };
};

const addBet = (state, payload) => ({
	...state,
	bets: [...state.bets, payload],
});

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_USER_STATE:
			return changeUserState(state, payload);

		case CHANGE_USER_BETS_STATE:
			return changeUserBetsState(state, payload);

		case UPDATE_BET_STATE:
			return updateBetState(state, payload);

		case REMOVE_BET:
			return removeBet(state, payload);

		case ADD_BET:
			return addBet(state, payload);

		default:
			return state;
	}
};

export default userReducer;
