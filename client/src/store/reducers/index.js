import { combineReducers } from 'redux';

import sportsReducer from './sportsReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
	sportsState: sportsReducer,
	userState: userReducer
});

export default reducers;