import React, { Component } from 'react';
import axios from 'axios';

const API = '/api/tasks';

export default class TasksList extends Component {
	state = {
		tasks: []
	};

	componentDidMount() {
		axios.get(`${API}`).then(res => {
			const tasks = res.data;
			this.setState({ tasks });
			console.log(tasks);
		});
	}

	render() {
		return (
			<div>
				<h2>Tasks List</h2>
				{this.state.tasks.map(task => <li key={task.id}>{task.subject}</li>)}
			</div>
		);
	}
}
