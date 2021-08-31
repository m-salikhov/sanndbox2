import { addALLCarsAction, addMoreCarsAction } from './carsActions';
import axios from 'axios';

export const getSomeCars = (payload: any) => {
	return (dispatch: any) => {
		axios
			.post('/cars/somecars', payload)
			.then((res) => res.data)
			.then((data) => dispatch(addMoreCarsAction(data)));
	};
};

export const getAllCars = () => {
	return (dispatch: any) => {
		axios
			.get('/cars')
			.then((res) => res.data)
			.then((data) => dispatch(addALLCarsAction(data)));
	};
};
