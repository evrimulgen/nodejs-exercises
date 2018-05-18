import React from 'react';

import axios from 'axios';

class TaskList extends React.Component {
	state = {
		allTasks: []
	};

	componentDidMount() {
		this.filterField && this.filterField.focus();

		axios.get(`http://localhost:3001/api/tasks`).then(res => {
			const allTasks = res.data;
			// console.log(allTasks);
			this.setState({ allTasks });
		});
	}

	render() {
		// console.log(this.state.allTasks);
		return (
			<div className="row">
				<div className="mt-2 w-100">
					<h3>Tasks</h3>
					{/* {queryObject &&
						(queryObject.owner_id ||
							queryObject.asignee_id ||
							queryObject.project_id) && (
							<h6>
								{' '}
								<em>
									{' '}
									Prefilter by owner: {queryObject.owner_id || 'all'}; asignee:{' '}
									{queryObject.asignee_id || 'all'}; project id:{' '}
									{queryObject.project_id || 'all'}{' '}
								</em>{' '}
							</h6>
                        )} */}
					<table className="table table-inverse">
						<thead>
							<tr>
								<th>Subject</th>
								<th>Description</th>
								<th>Status</th>
								<th>Owner</th>
								<th>Deadline</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th />
								<th />
								<th />
								<th />
								<th>Total items: </th>
							</tr>
						</tfoot>
						<tbody>
							{this.state.allTasks.map(task => {
								return (
									<tr key={task.id}>
										<td>{task.subject}</td>
										<td>{task.description}</td>
										<td>{task.status}</td>
										<td>{task.owner_name}</td>
										<td>{task.end_date}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default TaskList;
