import { addALLCarsAction, addMoreCarsAction } from './carsActions';
import axios from 'axios';

export const getSomeCars = (payload) => {
	return (dispatch) => {
		console.log(payload);
		axios
			.post('/cars/somecars', payload, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			})
			.then((res) => res.data)
			.then((data) => dispatch(addMoreCarsAction(data)));
	};
};

export const getAllCars = () => {
	return (dispatch) => {
		axios
			.get('/cars', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			})
			.then((res) => res.data)
			.then((data) => dispatch(addALLCarsAction(data)));
	};
};
