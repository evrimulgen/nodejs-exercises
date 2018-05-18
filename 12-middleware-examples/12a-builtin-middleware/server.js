const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const validator = require('express-validator');
const path = require('path');

const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	bodyParser.json({
		type: 'application/json'
	})
);
app.use(validator());

// app.use('/api', routes);

// EXPRESS ONLY BUILT IN MIDDLEWARE EXAMPLE
app.use(express.static(path.join(__dirname, '/public/index.html')));

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
