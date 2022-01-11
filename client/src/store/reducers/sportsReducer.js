import { CHANGE_SPORTS_STATE } from '../../constants/store';

const initialState = {
	sports: null,
};

const changeSportsState = (state, payload) => ({
    ...state,
    currentUser: payload.user,
    token: payload.token,
});


const sportsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_SPORTS_STATE:
			return changeSportsState(state, payload);

		default:
			return state;
	}
};

export default sportsReducer;