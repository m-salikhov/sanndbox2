import logo from '../img/logo.svg';
import userIcon from '../img/iconfinder_370076_account_avatar_client_male_person_icon.svg';
import '../styles/headerUser.scss';

function HeaderUser() {
	return (
		<header className='user-header'>
			<img src={logo} alt='логотип скиллдрайв' />

			<div className='navigation'>
				<nav>
					<ul>
						<li>Бронирования</li>
						<li>Мои автомобили</li>
						<li>Сообщения</li>
						<li>
							{' '}
							<img src={userIcon} alt='аватар' />{' '}
						</li>
					</ul>
				</nav>
			</div>
			{/* <div className='header__nav-and-btn'>
				<nav>
					<ul>
						<li>
							<Link to='/'>О нас</Link>
						</li>
						<li>
							<Link to='/'>Условия</Link>
						</li>
						<li>
							<Link to='/qa'>Частые вопросы</Link>
						</li>
					</ul>
				</nav>

				<button>
					<Link to='/val'>Войти</Link>
				</button>
			</div> */}
		</header>
	);
}
export default HeaderUser;
