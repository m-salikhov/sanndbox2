import { configure } from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
	throw new Error(message);
};
