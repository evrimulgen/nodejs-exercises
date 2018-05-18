import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ProjectList from './components/ProjectList';
import TasksList from './components/TasksList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" exact component={ProjectList} />
					<Route path="/tasks" exact component={TasksList} />
					<Redirect from="/projects" to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
