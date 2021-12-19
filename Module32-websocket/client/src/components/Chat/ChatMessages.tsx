import axios from 'axios';
import { FormEvent, useState, MouseEvent, FC } from 'react';
import { Message } from '../../interfaces/interfaces';
import Payment from '../Payment/Payment';

interface ChatMessagesProps {
	selectedUser: string;
	messages: Message[];
	currentUser: {
		username: string | null;
		sub: string | null;
	};
}

const ChatMessages: FC<ChatMessagesProps> = ({
	selectedUser,
	messages,
	currentUser,
}) => {
	const [message, setMessage] = useState('');

	function onSubmit(e: FormEvent<HTMLFormElement> | MouseEvent<HTMLElement>) {
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

		setMessage('');
	}
	return (
		<div className='chat__messages'>
			{messages.length > 0 && selectedUser ? (
				messages.map((elem: Message) => {
					if (elem.user._id === currentUser.sub && elem.toUser._id === selectedUser)
						return (
							<p className='message' key={elem._id}>
								{elem.body}
							</p>
						);
					if (elem.user._id === selectedUser && elem.toUser._id === currentUser.sub)
						return <p key={elem._id}>{elem.body}</p>;
					else return null;
				})
			) : (
				<p>выберите пользователя</p>
			)}
			<form onSubmit={onSubmit}>
				<input
					className='input-msg'
					type='text'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></input>
				<button className='subButton' type='submit'>
					Отправить
				</button>
			</form>
			<Payment selectedUser={selectedUser} />
		</div>
	);
};

export default ChatMessages;
