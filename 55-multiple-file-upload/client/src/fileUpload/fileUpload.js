import React, { Component } from 'react';

class FileUpload extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imageURL: ''
		};

		this.handleUploadImage = this.handleUploadImage.bind(this);
	}

	handleUploadImage(ev) {
		ev.preventDefault();

		const data = new FormData();
		data.append('files0', this.uploadInput.files[0]);
		data.append('files1', this.uploadInput.files[1]);

		// console.log(dat);

		fetch('http://localhost:3001/upload', {
			method: 'POST',
			body: data
		}).then(response => {
			response.json().then(body => {
				this.setState({ imageURL: `http://localhost:3001/${body}` });
			});
		});
	}
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-3">Multiple FileUpload</h1>
				<form onSubmit={this.handleUploadImage}>
					<div>
						<input
							name="node"
							ref={ref => {
								this.uploadInput = ref;
							}}
							type="file"
							multiple
						/>
					</div>
					<br />
					{/* <div>
						<input
							ref={ref => {
								this.fileName = ref;
							}}
							type="text"
							placeholder="Enter the desired name of file"
						/>
					</div> */}
					<br />
					<div>
						<button className="btn btn-success">Upload</button>
					</div>
					{/* <hr /> */}
					{/* <p>Uploaded Image:</p>
					<img src={this.state.imageURL} alt="img" /> */}
				</form>
			</div>
		);
	}
}

export default FileUpload;
