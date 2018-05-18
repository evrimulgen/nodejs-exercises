const express = require('express');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const app = express();
const port = process.env.PORT;

// Get a list of all projects
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
