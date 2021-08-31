import { ADD_ALL_CARS, ADD_MORE_CARS } from '../../reducers/carsReducers';

export const addMoreCarsAction = (payload: any) => ({
	type: ADD_MORE_CARS,
	payload,
});

export const addALLCarsAction = (payload: any) => ({
	type: ADD_ALL_CARS,
	payload,
});
