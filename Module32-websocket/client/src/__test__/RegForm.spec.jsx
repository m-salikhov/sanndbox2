import { shallow } from 'enzyme';
import RegForm from '../components/RegForm/RegForm';

describe('RegForm component', () => {
	it('should render RegForm component', () => {
		const component = shallow(<RegForm />);
		expect(component).toMatchSnapshot();
	});
});
