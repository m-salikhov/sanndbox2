// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Car } from '../../interfaces/interfaces';
import { updateCar } from '../../store/actions/CarsActions/asyncCarsAction';
interface carItem {
	car: Car;
	startDate: String;
	endDate: String;
}

const CarsItem = ({ car, startDate, endDate }: carItem) => {
	const dispatch = useDispatch();

	const bookedCarUpdate = { booked: true, date: { startDate, endDate } };

	function onClick() {
		dispatch(updateCar({ id: car._id, bookedCarUpdate }));
	}

	return (
		<div className='card'>
			<div className='card-img'>
				<img src={car.photo} alt={car.model} />
			</div>
			<div className='card-info'>
				<div className='card-text'>
					<h2>
						{car.brand} {car.model}{' '}
					</h2>
					<h2>{`${car.price} р/сутки`}</h2>
				</div>
				<div className='card-booking'>
					<p>
						{car.bookedInfo.booked ? (
							'Машина забронирована до ' + car.bookedInfo.date.endDate
						) : (
							<button type='button' onClick={onClick}>
								Забронировать
							</button>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CarsItem;
