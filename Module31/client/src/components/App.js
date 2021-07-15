import React from 'react';
import RegForm from './RegForm/RegForm';
import Main from './Main/Main';
import QApage from './QApage/QApage';
import ValForm from './ValForm/ValForm';
import RecPass from './RecPass/RecPass';

import '../styles/style.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cars } from './Cars';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path='/reg' component={RegForm} />
					<Route path='/qa' component={QApage} />
					<Route path='/val' component={ValForm} />
					<Route path='/recpass' component={RecPass} />
					<Route path='/cars' component={Cars} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
