import { useState } from 'react';
import Footer from '../Footer';
import HeaderUser from '../HeaderUser';
import './cars.scss';

import { useQuery, useLazyQuery } from '@apollo/client';
import { FETCH_ALLCARS_QUERY, FETCH_SOMECARS } from '../../utils/gql-req';

export const Cars = () => {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [showAllCars, setShowAllCars] = useState(false);
	const [showFilteredCars, setShowFilteredCars] = useState(false);

	const [filterCars, setFilterCars] = useState({ city: '', type: '' });

	const [getSomeCars, { loading: loadingSomeCars, data: filteredCars }] =
		useLazyQuery(FETCH_SOMECARS);

	const { loading: carsLoading, data: allCars } = useQuery(FETCH_ALLCARS_QUERY);
	if (carsLoading) return 'Loading...';

	console.log(allCars);
	console.log(filteredCars);

	// const [getSomeCars, { data}] = useLazyQuery()

	return (
		<>
			<HeaderUser />
			<main className='cars'>
				<h2>Арендуйте автомобиль</h2>
				<div className='search'>
					<select
						onChange={(e) => setFilterCars({ ...filterCars, city: e.target.value })}
					>
						<option disabled='true' selected>
							Выберите город
						</option>
						<option value='Moscow'>Москва</option>
						<option value='Spb'>Санкт-Петербург</option>
					</select>
					<input type='date' onChange={(e) => setStartDate(e.target.value)} />
					<input type='date' onChange={(e) => setEndDate(e.target.value)} />
					<select
						onChange={(e) => setFilterCars({ ...filterCars, type: e.target.value })}
					>
						<option disabled='true' selected>
							Выберите тип
						</option>
						<option value='sedan'>Легковые</option>
						<option value='minivan'>Минивэны</option>
					</select>
					<button
						type='submit'
						onClick={() => {
							getSomeCars({ variables: { filter: filterCars } });
							setShowAllCars(false);
							setShowFilteredCars(!showFilteredCars);
						}}
					>
						Найти
					</button>
					<button
						type='button'
						onClick={() => {
							setShowAllCars(!showAllCars);
							setShowFilteredCars(false);
						}}
					>
						Все авто
					</button>
				</div>

				{showAllCars ? (
					<div>
						{allCars.cars.map((car) => (
							<h1>
								Brand: {car.brand} Price: {car.price}$
							</h1>
						))}
					</div>
				) : (
					<div></div>
				)}
				{filteredCars && showFilteredCars ? (
					<div>
						{filteredCars.someCars.map((car) => (
							<h1>
								Brand: {car.brand} Price: {car.price}$
							</h1>
						))}
					</div>
				) : (
					<div></div>
				)}
			</main>
			<Footer />
		</>
	);
};
