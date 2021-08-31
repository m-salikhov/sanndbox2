export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const ADD_USER = 'ADD_USER';

export const addMoreUsersAction = (payload) => ({
	type: ADD_ALL_USERS,
	payload,
});

export const addUser = (payload) => ({
	type: ADD_USER,
	payload,
});
