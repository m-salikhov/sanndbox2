import React, { useState } from 'react';
import axios from 'axios';
import valImg from '../../img/validation.svg';
import '../../styles/valform.scss';
import { Link, Redirect } from 'react-router-dom';

export default function ValForm() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const [message, setMessage] = useState('');
	const [isLog, setIsLog] = useState(false);

	function onSubmit(e) {
		e.preventDefault();
		axios
			.post('/val', {
				email,
				pass,
			})
			.then((res) => res.data)
			.then((data) => {
				if (data.accessToken) {
					localStorage.setItem('accessToken', data.accessToken);
					localStorage.setItem('refreshToken', data.refreshToken);

					setIsLog(true);
				} else setMessage(data);
			});
	}
	if (isLog) {
		return <Redirect to='/' />;
	}

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
