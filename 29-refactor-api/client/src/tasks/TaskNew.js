import React from 'react';
import axios from 'axios';

class TaskNew extends React.Component {
	state = {
		task: {
			subject: '',
			description: '',
			status: '',
			owner_name: ''
		}
	};

	onFormSubmit = e => {
		e.preventDefault();
		const elements = e.target.elements;

		const formData = {
			subject: this.state.task.subject,
			description: this.state.task.description,
			status: this.state.task.status,
			owner_name: this.state.task.owner_name
		};

		axios
			.post('http://localhost:3001/api/tasks/add/task', formData)
			.then(res => console.log(res.data));
		this.setState(() => ({
			task: {
				subject: elements.subject.value,
				description: elements.description.value,
				status: elements.status.value,
				owner_name: elements.owner_name.value
			}
		}));
	};

	handleFormInputChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState(prevState => ({
			task: {
				...this.state.task,
				[name]: value
			}
		}));
	};

	render() {
		return (
			<div className="card card-inverse">
				<form onSubmit={this.onFormSubmit}>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							value={this.state.task.subject}
							onChange={this.handleFormInputChange}
							className={`form-control
							)}`}
							name="subject"
							type="text"
							id="subject"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<input
							value={this.state.task.description}
							onChange={this.handleFormInputChange}
							className={`form-control 
							)}`}
							name="description"
							type="text"
							id="description"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="status">Status</label>
						<input
							value={this.state.task.status}
							onChange={this.handleFormInputChange}
							name="status"
							type="text"
							className="form-control"
							id="status"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="owner_name">Owner Name</label>
						<input
							value={this.state.task.owner_name}
							onChange={this.handleFormInputChange}
							name="owner_name"
							type="text"
							className="form-control"
							id="owner_name"
						/>
					</div>
					<button className="btn btn-success">Save</button>
				</form>
			</div>
		);
	}
}

export default TaskNew;
