import { useEffect, useState, FC } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './chat.scss';
import { Message, OnlineUser } from '../../interfaces/interfaces';
import ChatMessages from './ChatMessages';
import ChatUsers from './ChatUsers';

export const Chat: FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
	const [selectedUser, setSelectedUser] = useState('');

	const accessToken = localStorage.getItem('access_token');

	const currentUser = {
		username: localStorage.getItem('curentUsername'),
		sub: localStorage.getItem('curentUserID'),
	};

	useEffect(() => {
		axios
			.get('/messages/messagesById', {
				headers: {
					authorization: `Bearer ${accessToken}`,
				},
			})
			.then((res) => res.data)
			.then((data) => setMessages(data));
	}, [accessToken]);

	useEffect((): any => {
		const socket = openSocket('http://localhost:80');
		socket.emit('auth-te', { accessToken });

		socket.on('message', (messageFromServer: Message) => {
			setMessages((messages) => [...messages, messageFromServer]);
			console.log(messageFromServer);
		});

		socket.on('auth-ed', (authStatusResponse) => {
			if (authStatusResponse.success) {
				console.log('WS was auth-ed!!');
				return;
			}
			console.log('WS was not auth-ed');
			console.log(authStatusResponse.message);
		});

		socket.on('getAllConnectUsers', (data) => {
			setOnlineUsers((onlineUsers): OnlineUser[] => [...onlineUsers, ...data]);
		});

		socket.on('newUser', (data) => {
			setOnlineUsers((onlineUsers): OnlineUser[] => {
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

		return () => socket.disconnect();
	}, [accessToken]);
	console.log(selectedUser);

	return (
		<main className='main__chat'>
			<div className='chat'>
				<ChatMessages
					messages={messages}
					selectedUser={selectedUser}
					currentUser={currentUser}
				/>
				<ChatUsers
					changeSelectedUser={(sub: string) => setSelectedUser(sub)}
					onlineUsers={onlineUsers}
					selectedUser={selectedUser}
					currentUser={currentUser}
				/>
			</div>

			<button>
				<Link to='/'>Main</Link>
			</button>
		</main>
	);
};
