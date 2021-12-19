import AboutUser from './AboutUser';
import '../../styles/regform.scss';

export default function RegForm() {
	return (
		<main className='reg-form'>
			<p>шаг 1 из 3</p>
			<h1 className='title'>Расскажите о себе</h1>
			<div className='container'>
				<AboutUser />
			</div>
		</main>
	);
}
