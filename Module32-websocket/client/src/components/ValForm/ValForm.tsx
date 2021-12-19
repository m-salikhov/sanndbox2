import { useEffect, useState } from 'react';
import axios from 'axios';
import valImg from '../../img/validation.svg';
import '../../styles/valform.scss';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/actions/userActions';
import { ValResponse } from '../../interfaces/interfaces';

export default function ValForm() {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const [message, setMessage] = useState('');
	const [isLog, setIsLog] = useState(false);

	const onAuth = (payload: any) => {
		console.log(payload);
		axios
			.post('/loginVK', {
				username: `${payload.first_name} ${payload.last_name}`,
				uid: payload.uid,
			})
			.then((res) => res.data)
			.then((data) => {
				localStorage.setItem('access_token', data.access_token);
				localStorage.setItem('curentUsername', data.payload.username);
				localStorage.setItem('curentUserID', data.payload.sub);
				console.log(data);
				console.log(localStorage);
			});
	};

	useEffect(() => {
		//@ts-ignore
		window.VK.Widgets.Auth('vk-auth-widjet', {
			onAuth,
		});
	}, []);

	function onSubmit(e: any) {
		e.preventDefault();
		axios
			.post('/login', {
				email,
				pass,
			})
			.then((res) => res.data)
			.then((data: ValResponse) => {
				if (data.access_token) {
					localStorage.setItem('access_token', data.access_token);
					localStorage.setItem('curentUsername', data.payload.username);
					localStorage.setItem('curentUserID', data.payload.sub);

					console.log(data);
					setIsLog(true);
					dispatch(addUser(data.payload));
				}
			})
			.catch((error) => {
				setMessage(error.message);
			});
	}
	if (isLog) {
		return <Redirect to='/' />;
	}

	console.log(message);

	return (
		<div className='val-form__wrapper'>
			<form className='val-form'>
				{' '}
				<div className='val-form__container'>
					<div className='form__img'>
						<img src={valImg} alt='заглавное изображение' />
					</div>
					<h1>Авторизация</h1>
					<input
						type='email'
						placeholder='Электронная почта'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>
						<input
							type='password'
							placeholder='Пароль'
							value={pass}
							onChange={(e) => setPass(e.target.value)}
						/>
						<Link to='/recpass'>Забыл пароль</Link>
					</label>
					<h2 style={{ color: 'red' }}>{message}</h2>

					<div>
						<button className='button-sub' onClick={onSubmit}>
							Войти
						</button>
					</div>
					<div className='vk-auth'>
						<div id='vk-auth-widjet'>vk login</div>
					</div>
					<div className='rectangle'>
						<button className='button-reg'>
							<p>
								<Link to='/reg'>Зарегистрироваться</Link>
							</p>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
