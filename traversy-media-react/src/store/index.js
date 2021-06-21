import { createStore, applyMiddleware } from 'redux';

import { taskReducer } from './task.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
	taskReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
