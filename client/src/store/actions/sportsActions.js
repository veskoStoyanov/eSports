import { CHANGE_SPORTS_STATE, } from '../../constants/store';

export const changeSportsState = (userData) => (dispatch) =>
	dispatch({
		type: CHANGE_SPORTS_STATE,
		payload: userData,
	});