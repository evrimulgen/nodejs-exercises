const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const validator = require('express-validator');

// Get CONFIG
const config = require('./config/config.json');

const routes = require('./api/routes');

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

app.use('/api', routes);

app.listen(port, () => {
	console.log(`Server running at http://${config.development.host}:${port}`);
});
