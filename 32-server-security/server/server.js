const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const validator = require('express-validator');
const helmet = require('helmet');

const verifyToken = require('./middleware/auth-verification');

// Get CONFIG
const config = require('./config/dev.config.json');
require('dotenv').config('.env');

const projectRoutes = require('./api/project-routes');
const taskRoutes = require('./api/task-routes');
const authRoutes = require('./api/authRoutes');

const app = express();

// Using Config Object
const port = config.development.port;

app.use(cors());
app.use(helmet());
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
app.use('/api', projectRoutes);
app.use('/api', taskRoutes);

app.listen(port, () => {
	console.log(`Server running at http://${config.development.host}:${port}`);
});
