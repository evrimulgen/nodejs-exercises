const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const validator = require('express-validator');

const verifyToken = require('./middleware/auth-verification');

// Get CONFIG
const config = require('./config/dev.config.json');
require('dotenv').config('.env');

let db = require('./models/index.js');

const routes = require('./api/routes');
const authRoutes = require('./api/authRoutes');

const app = express();

// Using Config Object
const port = config.development.port;

app.use(cors());
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(
	bodyParser.json({
		type: 'application/json'
	})
);
app.use(validator());

// consume API
app.use('/api', authRoutes);
// app.use('/api', verifyToken, routes);

// sqlite3 routes
app.get('/api/projects', async (req, res) => {
	let project = await db.models.projectsTable.findAll();

	if (project.length === 0) {
		res.json('none records exist!');
	} else {
		res.json(project);
	}
});

app.get('/api/create', async function(req, res) {
	// Try creating some objects
	let list = [
		{
			code: 'ONE',
			name: 'Project ONE',
			description: 'This is the description of Project ONE',
			owner_id: 10,
			owner_name: 'James Hansen',
			category_id: 50,
			created_date: '07/09/2051',
			end_date: '2051-10-19T21:00:00.000Z'
		},
		{
			code: 'TWO',
			name: 'Project TWO',
			description: 'This is the description of Project TWO',
			owner_id: 10,
			owner_name: 'James Hansen',
			category_id: 50,
			created_date: '24/10/2051',
			end_date: '2051-11-18T21:00:00.000Z'
		}
	];

	// Save in the database.
	try {
		for (item of list) {
			await db.models.projectsTable.create(item);
		}

		res.redirect('/api/projects');
	} catch (error) {
		console.log('There was an error saving the person.\n' + error);
		res.redirect('/lost');
	}
});

app.listen(port, () => {
	console.log(`Server running at http://${config.development.host}:${port}`);
});
