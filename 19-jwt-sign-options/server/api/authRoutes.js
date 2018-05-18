const jwt = require('jsonwebtoken');
const routes = require('express').Router();
const user = require('../models/user');

// login route
routes.post('/login', (req, res) => {
	// send the user as payload
	jwt.sign(
		{ user: user },
		process.env.JWT_SECRET,
		{ algorithm: 'HS256', expiresIn: '10h' },
		(err, token) => {
			res.json({
				token: token
			});
		}
	);
});

module.exports = routes;
