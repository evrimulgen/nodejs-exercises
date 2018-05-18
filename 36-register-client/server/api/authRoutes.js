const jwt = require('jsonwebtoken');
const routes = require('express').Router();
// const user = require('../mock-models/user');
const db = require('../models/index');

// login route
routes.post('/login', (req, res) => {
	db.users
		.findOne({
			where: {
				email: req.body.email
			},
			attributes: ['id', 'name', 'email', 'password', 'role']
		})
		.then(user => {
			if (req.body.password === user.password) {
				const token = jwt.sign(
					{ id: user.id },
					process.env.JWT_SECRET,
					(err, token) => {
						res.status(200).json({
							auth: true,
							token: token,
							user: {
								email: user.email,
								name: user.name,
								id: user.id,
								role: user.role
							}
						});
					}
				);
			} else {
				res
					.status(401)
					.json({ auth: false, token: null, message: 'Wrong Password!' });
			}
		})
		.catch(function(error) {
			console.error(error);
			res.status(500).json('Internal Server Error: ', error);
		});
});

// registration route
routes.post('/register', (req, res) => {
	console.log(req.body);

	db.users.create(req.body).then(newUser => {
		return res.status(200).json('New User Created');
	});
});

module.exports = routes;
