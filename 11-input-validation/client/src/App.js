import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ProjectList from './components/ProjectList';
import TasksList from './components/TasksList';
import ProjectItem from './components/ProjectItem';
import AddProject from './components/AddProject';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" exact component={ProjectList} />
					<Route path="/tasks" exact component={TasksList} />
					<Route path="/add/project" exact component={AddProject} />
					<Route path="/projects/:id" exact component={ProjectItem} />

					<Redirect from="/projects" to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
