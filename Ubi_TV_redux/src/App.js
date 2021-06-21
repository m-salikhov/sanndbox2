import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addCustomerAction, delCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash); //stae.cash.cash означает, что получаем значение поля cash из редьюсера кэш
	const customers = useSelector((state) => state.customers.customers);

	const [addAmount, setAddAmount] = useState('0');
	const [getAmount, setGetAmount] = useState('0');
	const addAmountValue = Number(addAmount) || 0;
	const getAmountValue = Number(getAmount) || 0;
	const [addCustomer, setAddCustomer] = useState('');

	//ActionCreators для увеличение/уменьшения счета
	const addCash = (cash) => {
		dispatch({ type: 'ADD_CASH', payload: cash });
	};

	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash });
	};
	////////////////////////////

	const addNewCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomerAction(customer));
	};

	const delCustomer = (customer) => {
		dispatch(delCustomerAction(customer.id));
	};

	return (
		<div className='App'>
			<div>
				<div style={{ color: 'blue' }}>Ваш баланс: {cash}$</div>
				<input
					value={addAmountValue}
					onChange={(e) => setAddAmount(e.target.value)}
				></input>
				<button onClick={() => addCash(addAmountValue)}>
					{' '}
					Пополнить счет{' '}
				</button>
				<input
					value={getAmountValue}
					onChange={(e) => setGetAmount(e.target.value)}
				></input>

				<button onClick={() => getCash(getAmountValue)}>
					{' '}
					Снять со счета{' '}
				</button>
			</div>

			<div>
				<input
					type='text'
					value={addCustomer}
					onChange={(e) => setAddCustomer(e.target.value)}
				></input>
				<button
					onClick={() => {
						addNewCustomer(addCustomer);
						setAddCustomer('');
					}}
				>
					{' '}
					Добавить клиента{' '}
				</button>
				<button onClick={() => dispatch(fetchCustomers())}>
					{' '}
					Получить список клиентов из базы{' '}
				</button>
			</div>

			{customers.length > 0 ? (
				<div>
					{customers.map((customer) => (
						<div key={customer.id} onClick={() => delCustomer(customer)}>
							{' '}
							<h4> {customer.name} </h4>{' '}
						</div>
					))}{' '}
				</div>
			) : (
				<div>
					{' '}
					<h2> Клиентов нет </h2>{' '}
				</div>
			)}
		</div>
	);
}

export default App;
