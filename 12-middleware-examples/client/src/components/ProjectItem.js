import React, { Component } from 'react';
import axios from 'axios';

const API = `http://localhost:3001/api/projects`;

export default class ProjectItem extends Component {
	state = {
		id: '',
		name: ''
	};

	componentDidMount() {
		const { id } = this.props.match.params;

		axios.get(`${API}/${id}`).then(res => {
			const project = res.data;
			this.setState({ id: project.id, name: project.name });
		});
	}

	render() {
		const { id, name } = this.state;
		return (
			<div>
				<h2>
					You are now fetching {name} of id: {id}
				</h2>
			</div>
		);
	}
}
