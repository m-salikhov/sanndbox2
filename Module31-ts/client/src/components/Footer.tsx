import React from 'react';
import iconVk from '../img/footerIcons/vk.svg';
import iconInsta from '../img/footerIcons/insta.svg';
import iconFb from '../img/footerIcons/fb.svg';

function Footer() {
	return (
		<footer>
			<p>© SkillDrive Inc. 2020</p>
			<div className='footer__icons'>
				<a href='/#'>
					<img className='icon-vk' src={iconVk} alt='логотип вконтакте' />
				</a>
				<a href='/#'>
					<img className='icon-insta' src={iconInsta} alt='логотип инстаграм' />
				</a>
				<a href='/#'>
					<img className='icon-fb' src={iconFb} alt='логотип фейсбук' />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
