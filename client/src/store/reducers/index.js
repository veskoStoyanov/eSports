import { combineReducers } from 'redux';

import sportsReducer from './sportsReducer';

const reducers = combineReducers({
	sportsState: sportsReducer,
});

export default reducers;