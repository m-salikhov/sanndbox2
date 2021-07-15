import { addMoreUsersAction } from './userActions';

export const fetchUsers = () => {
	return (dispatch) => {
		fetch('/users')
			.then((response) => response.json())
			.then((json) => dispatch(addMoreUsersAction(json)));
	};
};
