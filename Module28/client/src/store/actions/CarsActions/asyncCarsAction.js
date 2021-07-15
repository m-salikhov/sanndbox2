import { addALLCarsAction, addMoreCarsAction } from './carsActions';
import axios from 'axios';

export const getSomeCars = (payload) => {
	return (dispatch) => {
		axios
			.post('/cars/somecars', payload)
			.then((res) => res.data)
			.then((data) => dispatch(addMoreCarsAction(data)));
	};
};

export const getAllCars = () => {
	return (dispatch) => {
		axios
			.get('/cars')
			.then((res) => res.data)
			.then((data) => dispatch(addALLCarsAction(data)));
	};
};
