import React from 'react';
import Collapsible from './Collapsible';
import MainHeader from './MainHeader';
import '../../styles/qapage.scss';
import Footer from '../Footer';

export default function QApage() {
	return (
		<>
			<main>
				<MainHeader />

				<Collapsible label='Могу ли я отменить бронь?'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Collapsible>

				<Collapsible
					label='Могу ли я вернуть деньги, если 
                    не подошел автомобиль?'
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Collapsible>

				<Collapsible label='Что делать, если случилось ДТП?'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Collapsible>

				<Collapsible
					label='Могу ли я оставить автомобиль  
                    в удобном для меня месте?'
				>
					<p>
						Данный вопрос обсуждается с собственником, но как правило автомобиль
						нужно вернуть туда, где вы его получили.
					</p>
				</Collapsible>

				<Collapsible label='Что делать, если собственник просит заплатить ему напрямую?'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Collapsible>

				<Collapsible label='Должен ли я заправлять автомобиль?'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</Collapsible>
			</main>
			<Footer />
		</>
	);
}
