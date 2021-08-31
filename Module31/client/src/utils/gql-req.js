import { gql } from '@apollo/client';

export const FETCH_ALLCARS_QUERY = gql`
	query fetchAllCars {
		cars {
			_id
			brand
			model
			price
			city
		}
	}
`;

export const CREATE_USER_REQUEST = gql`
	mutation CreateNewUser($userInput: UserDto!) {
		createUser(userDto: $userInput) {
			_id
			username
			passOrg
		}
	}
`;

export const FETCH_SOMECARS = gql`
	query SomeCars($filter: FindCarsDto!) {
		someCars(findCarsDto: $filter) {
			_id
			brand
			model
			price
		}
	}
`;
