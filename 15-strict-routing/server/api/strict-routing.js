const routes = require('express').Router({
	strict: true
});

routes.get('/route1', (req, res) => {
	res.status(200).send('/route1 is different from /route1/');
});

routes.get('/route1/', (req, res) => {
	res.status(200).send('/route1/');
});

module.exports = routes;
