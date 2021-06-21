import {
	ADD_ALL_TASKS,
	DEL_TASK,
	REMINDER,
	ADD_TASK,
} from '../actions/index.js';

const defaultState = [
	{
		id: 11,
		text: 'Task 11',
		day: 'Monday',
		reminder: false,
	},
	{
		id: 10,
		text: 'Task 10',
		day: 'Sunday',
		reminder: false,
	},
];

export const taskReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_ALL_TASKS:
			state.push(action.payload);
			return state.flat();
		case DEL_TASK:
			return state.filter((task) => task.id !== action.payload);
		case REMINDER:
			return state.map((task) => {
				if (task.id === action.payload)
					return { ...task, reminder: !task.reminder };
				return task;
			});
		case ADD_TASK:
			state.push(action.payload);
			return state;
		default:
			return state;
	}
};
