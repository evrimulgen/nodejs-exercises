const routes = require('express').Router();
const data = require('../db/db.json');
const { check, validationResult } = require('express-validator/check');
const db = require('../models/index');

// Get a list of all projects
routes.get('/projects', (req, res) => {
	db.projects.findAll({}).then(items => {
		res.status(200).json(items);
	});
});

// find a project by id
routes.get('/projects/:id', (req, res, next) => {
	const id = req.params.id;

	db.projects
		.find({
			where: {
				id
			}
		})
		.then(project => {
			res.status(200).json(project);
		});
});

// add a new project
routes.post(
	'/projects/add/project',
	[
		check('id')
			.trim()
			.matches(/\d/)
	],
	(req, res, next) => {
		const id = req.body.id;

		db.projects.create(req.body).then(newProject => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.json({ error: errors.mapped() });
			} else {
				// console.log(newProject);
				return res.status(200).json(newProject);
			}
		});
	}
);

// delete by id
routes.delete('/projects/:id', (req, res) => {
	const id = req.params.id;

	db.projects
		.destroy({
			where: {
				id //this will be your id that you want to delete
			}
		})
		.then(
			function(rowDeleted) {
				// rowDeleted will return number of rows deleted
				if (rowDeleted === 1) {
					console.log('Deleted successfully');
				}
			},
			function(err) {
				console.log(err);
			}
		);
	s;
});

routes.put('/projects/:id', (req, res) => {
	const id = req.params.id;

	db.projects
		.find({
			where: {
				id
			}
		})
		.then(project => {
			project
				.updateAttributes({
					name: req.body.name,
					description: req.body.description
				})
				.then(updatedProject => {
					return res.status(200).json(updatedProject);
				});
		});
});

// ====================================================
// Get a list of all tasks

// Get a list of all projects
routes.get('/tasks', (req, res) => {
	db.tasks.findAll({}).then(allTasks => {
		res.status(200).json(allTasks);
	});
});

routes.get('/tasks/:id', (req, res, next) => {
	const id = req.params.id;

	db.tasks
		.find({
			where: {
				id
			}
		})
		.then(task => {
			res.status(200).json(task);
		});
});

routes.post(
	'/tasks/add/task',
	[
		check('id')
			.trim()
			.matches(/\d/)
	],
	(req, res, next) => {
		const id = req.body.id;

		db.tasks.create(req.body).then(newTask => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.json({ error: errors.mapped() });
			} else {
				// console.log(newProject);
				return res.status(200).json(newTask);
			}
		});
	}
);

routes.put('/tasks/:id', (req, res) => {
	const id = req.params.id;

	db.tasks
		.find({
			where: {
				id
			}
		})
		.then(task => {
			task
				.updateAttributes({
					subject: req.body.name,
					description: req.body.description
				})
				.then(updatedTask => {
					return res.status(200).json(updatedTask);
				});
		});
});

routes.delete('/tasks/:id', (req, res) => {
	// const id = req.params.id

	db.tasks
		.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(rowDeleted => {
			console.log(rowDeleted);

			db.tasks.findAll({}).then(allTasks => {
				res.status(200).json(allTasks);
			});
		})
		.catch(function(error) {
			res.status(500).json(error);
		});
});

module.exports = routes;
