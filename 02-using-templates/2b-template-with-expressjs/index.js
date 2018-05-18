const express = require('express');

const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index', { user: 'Great User', title: 'Homepage' });
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
