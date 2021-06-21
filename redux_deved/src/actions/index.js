export const increment = () => {
	return {
		type: 'count/increment',
	};
};

export const decrement = () => {
	return {
		type: 'count/decrement',
	};
};

export const toZero = () => {
	return {
		type: 'count/toZero',
	};
};

export const addNewUser = (newUser) => {
	return {
		type: 'ADD_USER',
		payload: newUser,
	};
};

export const delUser = (newUser) => {
	return {
		type: 'DEL_USER',
		payload: newUser,
	};
};
