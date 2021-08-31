import React from 'react';
import QaTopImage from '../../img/undraw_questions_75e0 1.svg';

export default function MainHeader() {
	return (
		<>
			<div class='image-top'>
				<img src={QaTopImage} alt='заглавное изображение' />
			</div>

			<h1>Частые вопросы</h1>
			<p class='subtitle'>
				Отвечаем на вопросы, которые у вас могут возникнуть
			</p>
		</>
	);
}
