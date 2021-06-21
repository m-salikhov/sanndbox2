import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

function Main() {
	const [users, setUsers] = useState([]);

	//Проверка работы валидации
	function getAllUsers(e) {
		e.preventDefault();
		axios
			.get('/users', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			})
			.then((res) => res.data)
			.then((data) =>
				data.map(function (item) {
					return item['name'];
				})
			)
			.then((data) => {
				setUsers(data);
			});
	}

	return (
		<>
			<p>Тут будет стартовая страница</p>

			<div>
				<button>
					<a href='/reg'>Зарегистрироваться</a>
				</button>
			</div>

			{users.length > 0 ? (
				<button onClick={() => setUsers([])}>Users list:</button>
			) : (
				<button onClick={getAllUsers}>Get all users</button>
			)}

			<ul>
				{users.map((item) => (
					<li type='1'> {item} </li>
				))}
			</ul>

			<Footer />
		</>
	);
}

export default Main;
