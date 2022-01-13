import {
	CHANGE_USER_STATE,
	CHANGE_USER_SPORTS_STATE,
} from '../../constants/store';

const initialState = {
	user: null,
	userSports: null,
};

const changeUserState = (state, payload) => ({
	...state,
	user: payload,
});

const changeUserSportsState = (state, payload) => ({
	...state,
	userSports: payload,
});

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_USER_STATE:
			return changeUserState(state, payload);

		case CHANGE_USER_SPORTS_STATE:
			return changeUserSportsState(state, payload);

		default:
			return state;
	}
};

export default userReducer;
