import Button from './Button';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../actions/index.js';

const Header = ({ onAdd, showAdd }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	return (
		<header className='header'>
			<h1>Task Tracker</h1>
			{location.pathname === '/' && (
				<Button
					color={showAdd ? 'red' : 'green'}
					text={showAdd ? 'Close' : 'Add'}
					onClick={onAdd}
				/>
			)}
			{location.pathname === '/' && (
				<Button
					color='cyan'
					text='Add All'
					onClick={() => dispatch(fetchTasks())}
				/>
			)}
			{showAdd ? <Button color='lightblue' text='Clear' /> : ''}
		</header>
	);
};

export default Header;
