import React from 'react';
import axios from 'axios';

class TaskNew extends React.Component {
	state = {
		task: {
			subject: '',
			description: '',
			status: '',
			owner_name: '',
			project_name: ''
		},
		projects: []
	};

	componentDidMount() {
		axios.get('http://localhost:3001/api/projects').then(res => {
			console.log(res.data);
			const projects = res.data;
			this.setState({
				projects
			});
		});
	}

	onFormSubmit = e => {
		e.preventDefault();
		const elements = e.target.elements;

		const formData = {
			subject: this.state.task.subject,
			description: this.state.task.description,
			status: this.state.task.status,
			owner_name: this.state.task.owner_name,
			project_name: this.state.task.project_name
		};
		console.log(formData);
		axios
			.post('http://localhost:3001/api/tasks/add/task', formData)
			.then(res => console.log(res.data));
		this.setState(() => ({
			task: {
				subject: elements.subject.value,
				description: elements.description.value,
				status: elements.status.value,
				owner_name: elements.owner_name.value,
				project_name: elements.project_name.value
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
					{/* <div class="form-group">
						<label class="col-xs-3 control-label">Status</label>
						<div class="col-xs-5 selectContainer">
							<select class="form-control" name="size">
								<option value="">Choose a status</option>
								<option value="s">Small (S)</option>
								<option value="m">Medium (M)</option>
								<option value="l">Large (L)</option>
								<option value="xl">Extra large (XL)</option>
							</select>
						</div>
					</div> */}
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
					<div className="form-group">
						<label className="col-xs-3 control-label">Project</label>
						<div className="col-xs-5 selectContainer">
							<select
								className="form-control"
								name="project_name"
								id="project_name"
								value={this.state.task.project_name}
								onChange={this.handleFormInputChange}
							>
								<option>Select a Project</option>
								{this.state.projects.map(project => {
									return (
										<option value={project.name} key={project.id}>
											{project.name}
										</option>
									);
								})}
							</select>
						</div>
					</div>
					<button className="btn btn-success">Save</button>
				</form>
			</div>
		);
	}
}

export default TaskNew;
