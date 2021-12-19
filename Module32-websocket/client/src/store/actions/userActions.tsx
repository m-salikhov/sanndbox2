export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const ADD_USER = 'ADD_USER';

export const addMoreUsersAction = (payload: any) => ({
	type: ADD_ALL_USERS,
	payload,
});

export const addUser = (payload: any) => ({
	type: ADD_USER,
	payload,
});
