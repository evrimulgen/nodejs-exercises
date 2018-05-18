import React, { Component } from 'react';
import axios from 'axios';

class ResetPassword extends Component {
	state = {
		email: '',
		oldPassword: '',
		newPassword: ''
		// redirectToReferrer: false
	};

	_onChangeEmail = e => {
		this.setState({
			email: e.target.value
		});
	};

	_onChangeOldPassword = e => {
		this.setState({
			oldPassword: e.target.value
		});
	};

	_onChangeNewPassword = e => {
		this.setState({
			newPassword: e.target.value
		});
	};

	_onSubmit = async e => {
		e.preventDefault();
		const formData = {
			email: this.state.email,
			oldPassword: this.state.oldPassword,
			newPassword: this.state.newPassword
		};
		await axios.post('http://localhost:3001/api/reset', formData).then(res => {
			console.log(res.data);
		});
		this.setState({
			email: '',
			oldPassword: '',
			newPassword: ''
		});

		this.props.history.push('/login');
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
						<label>Enter Old Password:</label>
						<input
							type="password"
							value={this.state.oldPassword}
							onChange={this._onChangeOldPassword}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>Enter New Password:</label>
						<input
							type="password"
							value={this.state.newPassword}
							onChange={this._onChangeNewPassword}
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

export default ResetPassword;
