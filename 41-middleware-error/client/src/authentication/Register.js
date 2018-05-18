import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: ''
		// redirectToReferrer: false
	};

	_onChangeName = e => {
		this.setState({
			name: e.target.value
		});
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
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		};
		await axios
			.post('http://localhost:3001/api/register', formData)
			.then(res => {
				console.log(res.data);
			});
		this.setState({
			name: '',
			email: '',
			password: ''
		});

		this.props.history.push('/login');
	};

	render() {
		return (
			<div className="col-8 pt-2">
				{/* <form onSubmit={this._onSubmit}> */}
				<form>
					<div className="form-group">
						<label>Enter Name:</label>
						<input
							type="text"
							value={this.state.name}
							onChange={this._onChangeName}
							className="form-control"
						/>
					</div>
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
				<div>
					<hr />
					<p>
						Already registered? Proceed to <Link to="/login">Login</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default Register;
