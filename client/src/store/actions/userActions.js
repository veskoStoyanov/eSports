import {
	CHANGE_USER_STATE,
	CHANGE_USER_BETS_STATE,
	UPDATE_BET_STATE,
	REMOVE_BET,
	ADD_BET
} from '../../constants/store';

export const changeUserState = (user) => (dispatch) =>
	dispatch({
		type: CHANGE_USER_STATE,
		payload: user,
	});

export const changeUserBetsState = (bets) => (dispatch) => dispatch({
	type: CHANGE_USER_BETS_STATE,
	payload: bets,
});

export const updateBetState = (bet) => (dispatch) => dispatch({
	type: UPDATE_BET_STATE,
	payload: bet,
});

export const removeBet = (bet) => (dispatch) => dispatch({
	type: REMOVE_BET,
	payload: bet,
});
	
export const addBet = (bet) => (dispatch) => dispatch({
	type: ADD_BET,
	payload: bet,
});
	
