import React from 'react';
import recImg from '../../img/recPass.svg';
import '../../styles/recpass.scss';

export default function RecPass() {
	return (
		<div className='rec__wrapper'>
			<form className='rec-form'>
				<div className='rec-form__container'>
					<div className='rec-form__img'>
						<img src={recImg} alt='заглавное изображение' />
					</div>
					<h1>Восстановление пароля</h1>
					<p>
						Мы отправим ссылку на восстановления пароля на вашу электронную
						почту
					</p>
					<input type='email' placeholder='Электронная почта' />
					<div>
						<button className='button-sub'>Войти</button>
					</div>
				</div>
			</form>
		</div>
	);
}
