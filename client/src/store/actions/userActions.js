import {
	CHANGE_USER_STATE,
	CHANGE_USER_SPORTS_STATE,
} from '../../constants/store';

export const changeUserState = (user) => (dispatch) =>
	dispatch({
		type: CHANGE_USER_STATE,
		payload: user,
	});

export const changeUserSportsState = (sports) => (dispatch) =>
	dispatch({
		type: CHANGE_USER_SPORTS_STATE,
		payload: sports,
	});
