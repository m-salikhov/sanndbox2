import { useState } from 'react';
import axios from 'axios';

export default function AboutUser() {
	const [inputUser, setInputUser] = useState({
		username: '',
		bdayDate: '',
		email: '',
		phone: '',
		passport: '',
		passDate: '',
		passOrg: '',
		passOrgCode: '',
		licenseNumber: '',
		dateLicense: '',
		pass: '',
	});

	const [passRepeat, setPassRepeat] = useState('');

	const onChange = (e: any) => {
		setInputUser({ ...inputUser, [e.target.name]: e.target.value });
	};

	const [message, setMessage] = useState('');

	function onSubmit(e: { preventDefault: () => void }) {
		e.preventDefault();
		if (inputUser.pass !== passRepeat) return setMessage('Пароль не совпадает');
		axios
			.post('/users', inputUser)
			.then((res) => res.data)
			.then((data) => setMessage(data.username))
			.catch((error) => setMessage(error.response.data.message));
	}

	console.log(message);
	return (
		<>
			<form onSubmit={onSubmit}>
				<h2>Информация о вас</h2>
				<label>
					ФИО{' '}
					<input
						className='name'
						name='username'
						onChange={onChange}
						value={inputUser.username}
						placeholder='ФИО полностью'
						type='text'
					/>
				</label>
				<label>
					Дата рождения
					<div className='date'>
						<input
							className='dateBirthday'
							name='bdayDate'
							onChange={onChange}
							value={inputUser.bdayDate}
							type='date'
						/>
					</div>
				</label>
				<label>
					Электронная почта
					<input
						className='email'
						placeholder='mail@example.com'
						name='email'
						onChange={onChange}
						value={inputUser.email}
						type='email'
					/>
				</label>
				<label>
					Телефон
					<input
						className='phone'
						placeholder='+7 900 000-00-00'
						name='phone'
						onChange={onChange}
						value={inputUser.phone}
						type='tel'
					/>
				</label>
				<h2>Паспорт</h2>
				<label>
					Серия и номер
					<input
						className='series'
						placeholder='0000 000000'
						name='passport'
						onChange={onChange}
						value={inputUser.passport}
						type='text'
					/>
				</label>
				<label>
					Дата выдачи
					<div className='date'>
						<input
							className='datePassport'
							name='passDate'
							onChange={onChange}
							value={inputUser.passDate}
							type='date'
						/>
					</div>
				</label>
				<label>
					Кем выдан
					<input
						className='issued'
						placeholder='Название органа выдавшего паспорт'
						name='passOrg'
						onChange={onChange}
						value={inputUser.passOrg}
						type='text'
					/>
				</label>
				<label>
					Код подразделения
					<input
						className='codeIssued'
						placeholder='000-000'
						name='passOrgCode'
						onChange={onChange}
						value={inputUser.passOrgCode}
						type='text'
					/>
				</label>
				<h2>Водительское удостоверение </h2>
				<label>
					Серия и номер
					<input
						className='licenseNumber'
						placeholder='0000 000000'
						name='licenseNumber'
						onChange={onChange}
						value={inputUser.licenseNumber}
						type='text'
					/>
				</label>
				<label>
					Дата выдачи
					<div className='date'>
						<input
							className='dateLicense'
							name='dateLicense'
							onChange={onChange}
							value={inputUser.dateLicense}
							type='date'
						/>
					</div>
				</label>
				<h2>Пароль</h2>
				<label>
					Придумайте пароль
					<input
						className='pass'
						name='pass'
						onChange={onChange}
						value={inputUser.pass}
						type='password'
					/>
				</label>
				<label>
					Повторите пароль{' '}
					<input
						className='passRepeat'
						name='passRepeat'
						onChange={(e) => setPassRepeat(e.target.value)}
						value={passRepeat}
						type='password'
					/>
				</label>
				<div className='rectangle'>
					<h2 style={{ color: 'red' }}>{message}</h2>
					<button className='subButton' type='submit'>
						Продолжить
					</button>
				</div>
			</form>
		</>
	);
}
