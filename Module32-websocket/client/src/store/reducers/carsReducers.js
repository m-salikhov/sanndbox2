const defaultState = { cars: [] };

export const ADD_MORE_CARS = 'ADD_MORE_CARS';
export const ADD_ALL_CARS = 'ADD_ALL_CARS';

export const carsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MORE_CARS:
			return { ...state, cars: action.payload };
		case ADD_ALL_CARS:
			return { ...state, cars: action.payload };
		default:
			return state;
	}
};
