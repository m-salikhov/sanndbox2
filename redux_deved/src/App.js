import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toZero, addNewUser, delUser } from './actions';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const [newUser, setNewUser] = useState('');
	// const [user, setUser] = useState('');

	return (
		<div className='App'>
			<h1>Счётчик {counter}</h1>
			<button type='button' onClick={() => dispatch(increment())}>
				+
			</button>
			<button type='button' onClick={() => dispatch(decrement())}>
				-
			</button>
			<button type='button' onClick={() => dispatch(toZero())}>
				Сбросить
			</button>

			{isLogged ? <h4>Вы вошли в аккаунт, если видите это</h4> : ''}
			<div>
				<input
					type='text'
					value={newUser}
					onChange={(e) => setNewUser(e.target.value)}
				></input>
				<button
					type='button'
					onClick={() => {
						dispatch(addNewUser(newUser));
						setNewUser('');
						console.log(users);
					}}
				>
					Добавить пользователя
				</button>
				{users.length > 0 ? (
					<div>
						{users.map((elem) => {
							return (
								<h3 key={elem.id} onClick={() => dispatch(delUser(elem.name))}>
									{elem.name}
								</h3>
							);
						})}
					</div>
				) : (
					<h3>Список пуст</h3>
				)}
			</div>
		</div>
	);
}

export default App;
