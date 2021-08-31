import { addMoreUsersAction } from './userActions';

export const fetchUsers = () => {
	return (dispatch: any) => {
		fetch('/users')
			.then((response) => response.json())
			.then((json) => dispatch(addMoreUsersAction(json)));
	};
};
