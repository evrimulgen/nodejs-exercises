import React, { Component } from 'react';
import ProjectList from './projects/ProjectList';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './Home/Home';
import Dashboard from './dashboard/Dashboard';
import Profile from './profile/Profile';
import TaskLayout from './tasks/TaskLayout';
import Four04 from './core/Four04';
import Login from './authentication/Login';
import Register from './authentication/Register';

export const Auth = {
	isAuthenticated: false,
	authenticate(cb) {
		if (localStorage.getItem('token')) {
			this.isAuthenticated = true;
		}
	},
	signout(cb) {
		localStorage.removeItem('token');
		localStorage.removeItem('auth');
		this.isAuthenticated = false;
	}
};

const AuthRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				return Auth.isAuthenticated === true ? (
					<Component {...props} {...rest} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				);
			}}
		/>
	);
};

export const AuthButton = withRouter(
	() =>
		Auth.isAuthenticated ? (
			<button
				className="btn btn-default"
				onClick={() => {
					Auth.signout(() => this.props.history.push('/'));
				}}
			>
				Sign out
			</button>
		) : (
			<p>You are not logged in</p>
		)
);

class App extends Component {
	title = 'Simple Project Manager';

	profile = {
		name: 'James Hansen',
		bio: 'Great great cat'
	};

	render() {
		return (
			<main className="container pt-3">
				<Navbar title={this.title} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />

					<AuthRoute path="/dashboard" component={Dashboard} />
					<AuthRoute
						path="/profile"
						exact
						component={Profile}
						profile={this.profile}
					/>
					<AuthRoute path="/tasks" component={TaskLayout} />

					<AuthRoute path="/projects" component={ProjectList} />
					<Route component={Four04} />
				</Switch>
			</main>
		);
	}
}

export default App;
