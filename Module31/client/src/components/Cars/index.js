import { useState } from 'react';
import Footer from '../Footer';
import HeaderUser from '../HeaderUser';
import './cars.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSomeCars,
	getAllCars,
} from '../../store/actions/CarsActions/asyncCarsAction';

export const Cars = () => {
	const dispatch = useDispatch();

	const [city, setCity] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [type, setType] = useState('');

	const filteredCars = useSelector((state) => state.carsReducer.cars);

	function btnOnClick() {
		dispatch(getSomeCars({ city, type }));
	}

	function btnGetAllCars() {
		dispatch(getAllCars());
	}

	return (
		<>
			<HeaderUser />
			<main className='cars'>
				<h2>Арендуйте автомобиль</h2>
				<div className='search'>
					<select onChange={(e) => setCity(e.target.value)}>
						<option disabled='true' selected>
							Выберите город
						</option>
						<option value='Moscow'>Москва</option>
						<option value='Spb'>Санкт-Петербург</option>
					</select>
					<input type='date' onChange={(e) => setStartDate(e.target.value)} />
					<input type='date' onChange={(e) => setEndDate(e.target.value)} />
					<select onChange={(e) => setType(e.target.value)}>
						<option disabled='true' selected>
							Выберите тип
						</option>
						<option value='sedan'>Легковые</option>
						<option value='minivan'>Минивэны</option>
					</select>
					<button type='submit' onClick={btnOnClick}>
						Найти
					</button>
					<button type='button' onClick={btnGetAllCars}>
						Все авто
					</button>
				</div>

				{filteredCars.length > 0 ? (
					filteredCars.map((elem) => <h1>{elem.brand}</h1>)
				) : (
					<h1>nothing</h1>
				)}
			</main>
			<Footer />
		</>
	);
};
