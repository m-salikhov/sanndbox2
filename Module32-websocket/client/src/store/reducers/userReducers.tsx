import { ADD_ALL_USERS, ADD_USER } from '../actions/userActions';

const defaultState = { users: [] };

export const userReducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case ADD_ALL_USERS:
			return { ...state, users: [...state.users, ...action.payload] };

		case ADD_USER:
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
