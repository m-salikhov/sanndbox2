export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'count/increment':
			return state + 1;
		case 'count/decrement':
			return state - 1;
		case 'count/toZero':
			return (state = 0);
		default:
			return state;
	}
};
