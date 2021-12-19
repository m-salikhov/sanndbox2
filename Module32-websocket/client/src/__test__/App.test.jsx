import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { shallow } from 'enzyme';

describe('App component', () => {
	test('элемент Войти', () => {
		render(<App />);
		const linkElement = screen.getByText(/Войти/i);
		expect(linkElement).toBeInTheDocument();
	});

	test('два плюс два равно четыре', () => {
		expect(2 + 2).toBe(4);
	});

	test('renders without crashing', () => {
		const component = shallow(<App />);
		expect(component).toBeDefined();
	});
});
