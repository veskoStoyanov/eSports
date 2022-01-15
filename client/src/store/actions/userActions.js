import {
	CHANGE_USER_STATE,
	CHANGE_USER_BETS_STATE,
	UPDATE_BET_STATE,
	REMOVE_BET,
	ADD_BET,
	SET_ERROR_STATE,
} from '../../constants/store';

import { fetchBets, postBet, putBets, deleteBet } from '../../modules/api';

export const changeUserState = (user) => (dispatch) =>
	dispatch({
		type: CHANGE_USER_STATE,
		payload: user,
	});

export const changeUserBetsState = (uid) => async (dispatch) => {	
	try {
		const { data } = await fetchBets(uid);
		return dispatch({
			type: CHANGE_USER_BETS_STATE,
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

export const addBet = (body, uid) => async (dispatch) => {
	try {
		const { data } = await postBet(body, uid);
		return dispatch({
			type: ADD_BET,
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

export const updateBetState = (body, uid) => async (dispatch) => {	
	try {
		const { data } = await putBets(body, uid);
		return dispatch({
			type: UPDATE_BET_STATE,
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

export const removeBet = (betId, uid) => async (dispatch) => {	
	try {
		await deleteBet(betId, uid);
		return dispatch({
			type: REMOVE_BET,
			payload: betId,
		});
	} catch (e) {
		console.log(e);
		return dispatch({
			type: SET_ERROR_STATE,
			payload: e,
		});
	}
}
	
