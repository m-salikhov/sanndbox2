const defaultState = { customers: [] };

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DEL_CUSTOMER = 'DEL_CUSTOMER';
const ADD_MORE_CUSTOMER = 'ADD_MORE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MORE_CUSTOMER:
			return { ...state, customers: [...state.customers, ...action.payload] };
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] };
		case DEL_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(
					(customer) => customer.id !== action.payload
				),
			};

		default:
			return state;
	}
};

export const addCustomerAction = (payload) => ({
	type: ADD_CUSTOMER,
	payload,
});
export const delCustomerAction = (payload) => ({
	type: DEL_CUSTOMER,
	payload,
});
export const addMoreCustomersAction = (payload) => ({
	type: ADD_MORE_CUSTOMER,
	payload,
});
