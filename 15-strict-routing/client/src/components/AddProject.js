import React, { Component } from 'react';
import axios from 'axios';

// const API = `http://localhost:3001/api/projects`;

export default class AddProject extends Component {
	state = {
		id: ''
	};

	_onChangeId = e => {
		this.setState({
			id: e.target.value
		});
	};

	_onSubmit = e => {
		e.preventDefault();
		const formData = {
			id: this.state.id
		};
		axios
			.post('http://localhost:3001/api/projects/add/project', formData)
			.then(res => console.log(res.data));

		this.setState({
			id: ''
		});
	};

	render() {
		return (
			<div>
				<h2>Add a new Project</h2>
				<form onSubmit={this._onSubmit}>
					<div>
						<label>Enter the id:</label>
						<input
							type="text"
							value={this.state.id}
							onChange={this._onChangeId}
						/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
