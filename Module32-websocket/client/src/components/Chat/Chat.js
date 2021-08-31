import { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './chat.scss';

export const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const [onlineUsers, setOnlineUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState('');

	const accessToken = localStorage.getItem('access_token');

	const currentUser = useSelector((state) => state.userReducer.users);
	console.log(currentUser);

	useEffect(() => {
		const socket = openSocket('http://localhost:3000');
		socket.emit('auth-te', { accessToken });
		// socket.emit('getAllConnectUsers', { accessToken });

		socket.on('message', (message) =>
			setMessages((messages) => [...messages, message])
		);

		socket.on('auth-ed', (authStatusResponse) => {
			if (authStatusResponse.success) {
				console.log('WS was auth-ed!!');
				return;
			}
			console.log('WS was not auth-ed');
		});

		socket.on('getAllConnectUsers', (data) => {
			setOnlineUsers((onlineUsers) => [...onlineUsers, ...data]);
			// console.log(onlineUsers);
		});

		socket.on('newUser', (data) => {
			console.log(data);
			setOnlineUsers((onlineUsers) => {
				if (onlineUsers.find((elem) => elem.username === data[0].username))
					return onlineUsers;
				else return [...onlineUsers, ...data];
			});
		});

		socket.on('disconnectedUser', (data) => {
			setOnlineUsers((onlineUsers) =>
				onlineUsers.filter((elem) => elem.username !== data[0].username)
			);
		});

		// console.log(accessToken);

		return () => socket.disconnect();
	}, [accessToken]);

	// console.log(onlineUsers);
	console.log(selectedUser);
	console.log(messages);

	function onSubmit(e) {
		e.preventDefault();

		axios.post(
			'/messages',
			{
				body: message,
				toUserId: selectedUser,
			},
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			}
		);
		// .then((res) => {
		// 	console.log(res.data);
		// 	setMessage('');
		// });

		// setMessage('');
		// .then((data) => setMessage(data.username))
		// .catch((error) => setMessage(error.response.data.message));
	}
	console.log(onlineUsers);

	return (
		<main className='main__chat'>
			<div className='chat'>
				<div className='chat__messages'>
					{messages.length > 0 ? (
						messages.map((elem) => {
							if (
								elem.user._id === currentUser.sub &&
								elem.toUser._id === selectedUser
							)
								return (
									<p className='message' key={elem._id}>
										{elem.body}
									</p>
								);
							if (
								elem.user._id === selectedUser &&
								elem.toUser._id === currentUser.sub
							)
								return <p key={elem._id}>{elem.body}</p>;
							else return null;
						})
					) : (
						<p>выберите пользователя</p>
					)}
					<form onSubmit={onSubmit}>
						<input type='text' onChange={(e) => setMessage(e.target.value)}></input>
						<button className='subButton' type='submit'>
							Отправить
						</button>
					</form>
				</div>

				<div className='chat_users'>
					<h2 style={{ color: 'red' }}>Вы вошли как: {currentUser.username} </h2>
					<h2>Пользователи online:</h2>
					{/* {onlineUsers.map((elem, index) => (
						<h2 key={index} onClick={() => setSelectedUser(elem.sub)}>
							<p> {elem.username}</p>
						</h2>
					))} */}

					{onlineUsers.map((elem, index) => {
						if (selectedUser === elem.sub) {
							return (
								<h2 key={index} onClick={() => setSelectedUser(elem.sub)}>
									<p style={{ color: 'blue' }}> {elem.username}</p>
								</h2>
							);
						}
						return (
							<h2 key={index} onClick={() => setSelectedUser(elem.sub)}>
								<p> {elem.username}</p>
							</h2>
						);
					})}
				</div>
			</div>

			<button>
				<Link to='/'>Main</Link>
			</button>
		</main>
	);
};
