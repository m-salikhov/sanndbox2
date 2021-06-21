import React from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
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

				<button>
					<Link to='/val'>Войти</Link>
				</button>
			</div>
		</header>
	);
}

export default Header;
