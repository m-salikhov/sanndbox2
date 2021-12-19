import { useState } from 'react';
import Footer from '../Footer';
import HeaderUser from '../HeaderUser';
import './cars.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	getSomeCars,
	getAllCars,
} from '../../store/actions/CarsActions/asyncCarsAction';
import { Car } from '../../interfaces/interfaces';
import CarsItem from './CarsItem';

export const Cars = () => {
	const dispatch = useDispatch();

	const [city, setCity] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [type, setType] = useState('');
	// const date3 = new Date(startDate);
	// const date = new Date(endDate);
	// console.log(date > date3);

	// console.log(date<date3)

	const filteredCars: Car[] = useSelector(
		(state: any) => state.carsReducer.cars
	);

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
				<h2>Выберите автомобиль</h2>
				<div className='search'>
					<select onChange={(e) => setCity(e.target.value)}>
						<option disabled={true} selected>
							Выберите город
						</option>
						<option value='Moscow'>Москва</option>
						<option value='Spb'>Санкт-Петербург</option>
					</select>
					<input type='date' onChange={(e) => setStartDate(e.target.value)} />
					<input type='date' onChange={(e) => setEndDate(e.target.value)} />
					<select onChange={(e) => setType(e.target.value)}>
						<option disabled={true} selected>
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

				<div className='filtered-wrapper'>
					{filteredCars.length > 0 ? (
						filteredCars.map((elem: Car) => (
							<CarsItem
								car={elem}
								key={elem._id}
								startDate={startDate}
								endDate={endDate}
							/>
						))
					) : (
						<h1>nothing</h1>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
};
