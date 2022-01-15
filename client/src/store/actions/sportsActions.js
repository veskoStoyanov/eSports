import {
	SET_INITIAL_SPORTS_STATE,
	CHANGE_SPORTS_STATE,
	SET_ERROR_STATE,
} from '../../constants/store';

import { getSports } from '../../modules/api';

export const setInitialSportsState = () => async (dispatch) => {	
	try {
		const { data } = await getSports();
		return dispatch({
			type: SET_INITIAL_SPORTS_STATE,
			payload: data,
		});
	} catch (e) {
		console.log(e);
		return dispatch({
			type: SET_ERROR_STATE,
			payload: e,
		});
	}
};

export const changeSportsState = (sports) => (dispatch) =>
	dispatch({
		type: CHANGE_SPORTS_STATE,
		payload: sports,
	});
