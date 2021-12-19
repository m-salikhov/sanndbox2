import { FC } from 'react';
import { OnlineUser } from '../../interfaces/interfaces';

interface ChatUsersProps {
	selectedUser: string;
	onlineUsers: OnlineUser[];
	currentUser: {
		username: string | null;
		sub: string | null;
	};
	changeSelectedUser(sub: string): void;
}

const ChatUsers: FC<ChatUsersProps> = ({
	changeSelectedUser,
	selectedUser,
	onlineUsers,
	currentUser,
}) => {
	console.log(selectedUser);
	return (
		<div className='chat_users'>
			<h2 style={{ color: 'red' }}>Вы вошли как: {currentUser.username} </h2>
			<h2>Пользователи online:</h2>

			{onlineUsers.map((user: OnlineUser) => {
				if (selectedUser === user.sub) {
					return (
						<h2 key={user.sub} onClick={() => changeSelectedUser('')}>
							<p style={{ color: 'blue' }}> {user.username}</p>
						</h2>
					);
				}
				return (
					<h2 key={user.sub} onClick={() => changeSelectedUser(user.sub)}>
						<p> {user.username}</p>
					</h2>
				);
			})}
		</div>
	);
};

export default ChatUsers;
