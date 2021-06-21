import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { delTask, toggleReminder } from '../actions';

const Task = ({ task }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => {
				dispatch(toggleReminder(task.id));
			}}
		>
			<h3>
				{task.text}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => dispatch(delTask(task.id))}
				/>{' '}
			</h3>
			<p>{task.day} </p>
		</div>
	);
};

export default Task;
