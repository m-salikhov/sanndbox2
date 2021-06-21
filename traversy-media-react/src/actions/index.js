export const ADD_ALL_TASKS = 'ADD_MORE_CUSTOMER';
export const DEL_TASK = 'DEL_TASK';
export const REMINDER = 'REMINDER';
export const ADD_TASK = 'ADD_TASK';

const addAllTasksAction = (payload) => ({
	type: ADD_ALL_TASKS,
	payload,
});

export const fetchTasks = () => {
	return (dispatch) => {
		fetch('http://localhost:5000/tasks')
			.then((response) => response.json())
			.then((json) => dispatch(addAllTasksAction(json)));
	};
};

export const delTask = (payload) => ({
	type: DEL_TASK,
	payload,
});

export const toggleReminder = (payload) => ({
	type: REMINDER,
	payload,
});

export const addTask = (payload) => ({
	type: ADD_TASK,
	payload,
});
