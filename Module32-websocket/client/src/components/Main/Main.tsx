// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../store/actions/asyncUserActions';
import Footer from '../Footer';
import Header from '../Header';
import './main.scss';
import img_main_1 from './images/main_1.svg';
import img_main_2 from './images/main_2.svg';
import img_main_3 from './images/main_3.svg';
import img_main_4 from './images/main_4.svg';
import { Link } from 'react-router-dom';

function Main() {
	return (
		<>
			<Header />

			<main>
				<img className='main-image' alt='фоновое изображение' src={img_main_1} />
				<section className='carsharing'>
					<h1>Каршеринг в любой точке России</h1>
					<div className='carsharing__text'>
						Будьте всегда за рулём во время путешествий и командировок.
					</div>
					<button className='carsharing__btn'>
						<Link to='/reg'>Зарегистрироваться</Link>
					</button>
				</section>
				<section className='pluses'>
					<div className='rent'>
						<div className='rent__img'>
							<img src={img_main_2} alt='изображение аренда' />
						</div>
						<div>
							<h2>Аренда напрямую от владельцев</h2>
							<div className='rent_text'>
								Вы получите автомобиль от его собственника, а мы проверим юридическую
								чистоту и техническую исправность.
							</div>
						</div>
					</div>
					<div className='cars'>
						<div>
							<h2>Автомобили на любой вкус</h2>
							<div className='cars__text'>
								Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей
								до премиум-класса и спорткаров.
							</div>
						</div>
						<div className='cars__img'>
							<img src={img_main_3} alt='изображение автомобили' />{' '}
						</div>
					</div>
					<div className='garanty'>
						<div className='garanty__img'>
							<img src={img_main_4} alt='изображение гарантия' />
						</div>
						<div>
							<h2>Гарантия честной аренды</h2>
							<div className='garanty__text'>
								Общение и оплата происходит через наш сервис, что предотвращает вас от
								обмана.
							</div>
						</div>
					</div>
				</section>
				<button className='cars__btn'>
					<Link to='/cars'>Выбрать автомобиль</Link>
				</button>
				<button className='cars__btn'>
					<Link to='/chat'>Перейти в чат</Link>
				</button>
			</main>

			<Footer />
		</>
	);
}

export default Main;
