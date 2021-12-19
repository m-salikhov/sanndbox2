import React from 'react';
import iconVk from '../img/footerIcons/vk.svg';
import iconInsta from '../img/footerIcons/insta.svg';
import iconFb from '../img/footerIcons/fb.svg';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<p>© SkillDrive Inc. 2020</p>
			<div className='footer__icons'>
				<Link to='/'>
					<img className='icon-vk' src={iconVk} alt='логотип вконтакте' />
				</Link>
				<Link to='/'>
					<img className='icon-insta' src={iconInsta} alt='логотип инстаграм' />
				</Link>
				<Link to='/#'>
					<img className='icon-fb' src={iconFb} alt='логотип фейсбук' />
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
