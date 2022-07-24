import { useState } from 'react';
import './App.scss';
import { CSSTransition } from 'react-transition-group';

function App() {
	const [checkOn, setCheckOn] = useState(false);

	return (
		<div className='App'>
			<div className='container'>
				<div className='contant'>
					{/* <div
						className='slider'
						onClick={() => {
							setCheckOn(true);
						}}
					></div> */}
					<CSSTransition classNames='checkon' in={checkOn} timeout={500}>
						<div className='slider' onClick={() => setCheckOn((prev) => !prev)}></div>
					</CSSTransition>
				</div>
			</div>
			<div className='add'>
				{' '}
				<label>
					<p>Подушка безопасности </p>
					<input
						name='airbag'
						onChange={(e) => console.log(e.target.value)}
						value='подушка безопасности'
						type='checkbox'
						onClick={() => setCheckOn(!checkOn)}
					/>
					<div className='contant'>
						<CSSTransition classNames='checkon' in={checkOn} timeout={500}>
							<div className='slider'></div>
						</CSSTransition>
					</div>
				</label>
			</div>
		</div>
	);
}

export default App;
