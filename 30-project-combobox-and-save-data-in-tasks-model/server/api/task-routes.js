const routes = require('express').Router();
const data = require('../db/db.json');
const { check, validationResult } = require('express-validator/check');
const db = require('../models/index');

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

routes.post('/tasks/add/task', (req, res, next) => {
	db.projects
		.find({
			where: {
				name: req.body.project_name
			},
			attributes: ['id', 'name', 'owner_id', 'owner_name']
		})
		.then(result => {
			db.tasks
				.create({
					subject: req.body.subject,
					description: req.body.description,
					status: req.body.status,
					owner_id: result.owner_id,
					owner_name: result.owner_name,
					project_id: result.id,
					project_name: result.name
				})
				.then(newTask => {
					res.status(200).json(newTask);
				});
		});
});

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
