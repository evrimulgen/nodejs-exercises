const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(
	bodyParser.json({
		type: 'application/json'
	})
);

app.use(express.static(path.join(__dirname, 'client/build')));

// consume API
app.use('/api', routes);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
