import { Car } from '../../interfaces/interfaces';
import { AnyAction } from 'redux';

const defaultState: { cars: Car[] } = { cars: [] };

export const ADD_MORE_CARS = 'ADD_MORE_CARS';
export const ADD_ALL_CARS = 'ADD_ALL_CARS';
export const UPDATE_CAR = 'UPDATE_CAR';

export const carsReducer = (state = defaultState, action: AnyAction) => {
	switch (action.type) {
		case ADD_MORE_CARS:
			return { ...state, cars: action.payload };
		case ADD_ALL_CARS:
			return { ...state, cars: action.payload };
		case UPDATE_CAR:
			const newState = state.cars.map((car) => {
				if (car._id === action.payload._id) {
					return action.payload;
				} else return car;
			});
			return { cars: newState };
		default:
			return state;
	}
};
