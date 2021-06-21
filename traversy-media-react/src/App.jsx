import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	const tasks = useSelector((state) => state);
	const [showAddTask, setShowAddTask] = useState(false);

	return (
		<Router>
			<div className='container'>
				<Header
					onAdd={() => setShowAddTask(!showAddTask)}
					showAdd={showAddTask}
				/>

				<Route
					path='/'
					exact
					render={() => (
						<>
							{showAddTask && <AddTask />}
							{tasks.length > 0 ? <Tasks /> : <h3>No Tasks</h3>}
						</>
					)}
				/>
				<Route path='/about' component={About} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
