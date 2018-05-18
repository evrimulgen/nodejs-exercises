import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Auth } from '../App';

class Login extends Component {
	state = {
		email: '',
		password: ''
		// redirectToReferrer: false
	};

	_onChangeEmail = e => {
		this.setState({
			email: e.target.value
		});
	};

	_onChangePassword = e => {
		this.setState({
			password: e.target.value
		});
	};

	_onSubmit = async e => {
		e.preventDefault();
		const formData = {
			email: this.state.email,
			password: this.state.password
		};
		await axios.post('http://localhost:3001/api/login', formData).then(res => {
			console.log(res.data);
			const token = res.data.token;
			const auth = res.data.auth;
			const user = res.data.user;
			localStorage.setItem('token', token);
			localStorage.setItem('auth', auth);
		});
		this.setState({
			email: '',
			password: ''
		});
		Auth.authenticate(() => {
			this.setState({
				redirectToReferrer: true
			});
		});
		this.props.history.push('/dashboard');
	};

	render() {
		return (
			<div className="col-8 pt-2">
				{/* <form onSubmit={this._onSubmit}> */}
				<form>
					<div className="form-group">
						<label>Enter Email:</label>
						<input
							type="email"
							value={this.state.email}
							onChange={this._onChangeEmail}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>Enter Password:</label>
						<input
							type="password"
							value={this.state.password}
							onChange={this._onChangePassword}
							className="form-control"
						/>
					</div>
					<br />
					<button
						type="submit"
						className="btn btn-success"
						onClick={this._onSubmit}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
