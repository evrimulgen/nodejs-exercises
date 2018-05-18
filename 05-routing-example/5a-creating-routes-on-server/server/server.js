const express = require('express');
const bodyParser = require('body-parser');

const data = require('./db/db.json');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json({ type: 'application/json' }));

// Get a list of all projects
app.get('/api/projects', (req, res) => {
	res.json(data.projects);
});

// Get a list of all tasks

app.get('/api/tasks', (req, res) => {
	res.json(data.tasks);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
