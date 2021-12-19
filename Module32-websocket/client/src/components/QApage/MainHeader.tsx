import React from 'react';
import QaTopImage from '../../img/undraw_questions_75e0 1.svg';

export default function MainHeader() {
	return (
		<>
			<div className='image-top'>
				<img src={QaTopImage} alt='заглавное изображение' />
			</div>

			<h1>Частые вопросы</h1>
			<p className='subtitle'>
				Отвечаем на вопросы, которые у вас могут возникнуть
			</p>
		</>
	);
}
