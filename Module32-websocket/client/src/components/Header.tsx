import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
	const logout = () => {
		localStorage.clear();
	};

	return (
		<header>
			<img src={logo} alt='логотип скиллдрайв' />
			<div className='header__nav-and-btn'>
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

				{localStorage.getItem('curentUsername') ? (
					<button onClick={logout}>
						<Link to='/'>Выйти</Link>
					</button>
				) : (
					<button>
						<Link to='/val'>Войти</Link>
					</button>
				)}
			</div>
		</header>
	);
}

export default Header;
