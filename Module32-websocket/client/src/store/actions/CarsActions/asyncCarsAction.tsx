import {
	addALLCarsAction,
	addMoreCarsAction,
	updateCarAction,
} from './carsActions';
import axios from 'axios';

export const getSomeCars = (payload: any) => {
	return (dispatch: any) => {
		console.log(payload);
		axios
			.post('/cars/somecars', payload, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			})
			.then((res) => {
				return res.data;
			})
			.then((data) => dispatch(addMoreCarsAction(data)));
	};
};

export const getAllCars = () => {
	return (dispatch: any) => {
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

export const updateCar = (payload: any) => {
	return (dispatch: any) => {
		axios
			.put(`/cars/${payload.id}`, payload.bookedCarUpdate)
			.then((res) => res.data.value)
			.then((data) => dispatch(updateCarAction(data)));
	};
};
