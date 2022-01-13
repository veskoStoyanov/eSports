import { SET_INITIAL_SPORTS_STATE, CHANGE_SPORTS_STATE } from '../../constants/store';

export const setInitialSportsState = (sports) => (dispatch) =>
	dispatch({
		type: SET_INITIAL_SPORTS_STATE,
		payload: sports,
});

export const changeSportsState = (sports) => (dispatch) =>
	dispatch({
		type: CHANGE_SPORTS_STATE,
		payload: sports,
});
