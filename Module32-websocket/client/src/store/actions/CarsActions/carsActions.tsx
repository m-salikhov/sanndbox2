import {
	ADD_ALL_CARS,
	ADD_MORE_CARS,
	UPDATE_CAR,
} from '../../reducers/carsReducers';

export const addMoreCarsAction = (payload: any) => ({
	type: ADD_MORE_CARS,
	payload,
});

export const addALLCarsAction = (payload: any) => ({
	type: ADD_ALL_CARS,
	payload,
});

export const updateCarAction = (payload: any) => ({
	type: UPDATE_CAR,
	payload,
});
