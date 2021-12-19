import CarsItem from '../components/Cars/CarsItem';
import { shallow } from 'enzyme';

const oneCar = {
	_id: '7cf68b41-9972-471e-940f-b65f318cb041',
	brand: 'Honda',
	model: 'civic',
	number: 'A101AA',
	price: 1500,
	city: 'Moscow',
	type: 'sedan',
	photo: '###',
};

const setUp = (item) => shallow(<CarsItem car={item} />);

describe('CarsItem component', () => {
	let component;
	beforeEach(() => (component = setUp(oneCar)));

	it('should conatain .card', () => {
		// в component находится по сути разметка компонента
		// находим конкретный компонент и проверяем, что встречается только 1 раз
		const wrapper = component.find('.card');
		expect(wrapper.length).toBe(1);
	});

	it('should contain h1', () => {
		// в component находится по сути разметка компонента
		// находим конкретный компонент и проверяем, что встречается только 1 раз
		const wrapper = component.find('h1');
		expect(wrapper.length).toBe(1);
	});
});
