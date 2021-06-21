import { combineReducers } from 'redux';

import { counterReducer } from './counter';
import { loggedReducer } from './isLogged';
import { userReducer } from './userReducer';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
	users: userReducer,
});

export default allReducers;
