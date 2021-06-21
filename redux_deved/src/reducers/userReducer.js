const users = [];

const ADD_USER = 'ADD_USER';
const DEL_USER = 'DEL_USER';

export const userReducer = (state = users, action) => {
	switch (action.type) {
		case ADD_USER:
			state.push({ name: action.payload, id: Date.now() });
			return state;
		case DEL_USER:
			return state.filter((user) => user.name !== action.payload);

		default:
			return state;
	}
};
