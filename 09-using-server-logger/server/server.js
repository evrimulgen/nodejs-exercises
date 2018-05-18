const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({
	type: 'application/json'
}));

// consume API

app.use('/api', routes);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
