import {
	SET_INITIAL_SPORTS_STATE,
	CHANGE_SPORTS_STATE,
} from '../../constants/store';

const initialState = {
	allSports: null,
	sports: null,
};

const changeSportsState = (state, payload) => ({
	...state,
	sports: payload,
});

const setInitialSportsState = (state, payload) => ({
	...state,
	allSports: payload,
	sports: payload,
});

const sportsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_INITIAL_SPORTS_STATE:
			return setInitialSportsState(state, payload);

		case CHANGE_SPORTS_STATE:
			return changeSportsState(state, payload);

		default:
			return state;
	}
};

export default sportsReducer;
