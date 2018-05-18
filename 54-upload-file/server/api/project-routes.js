const routes = require('express').Router();
const data = require('../db/db.json');
const { check, validationResult } = require('express-validator/check');
const db = require('../models/index');
const projectSchema = require('../schema/projectSchema');
const Joi = require('joi');
const validator = require('express-joi-validation')({});

// ============async promise errors handling ============

throwError = (code, errorType, errorMessage) => error => {
	if (!error) error = new Error(errorMessage || 'Default Error');
	error.code = code;
	error.errorType = errorType;
	throw error;
};
throwIf = (fn, code, errorType, errorMessage) => result => {
	if (fn(result)) {
		return throwError(code, errorType, errorMessage)();
	}
	return result;
};
sendSuccess = (res, message) => data => {
	res.status(200).json({ type: 'success', message, data });
};
sendError = (res, status, message) => error => {
	res.status(status || error.status).json({
		type: 'error',
		message: message || error.message,
		error
	});
};

// ======================================================

// Get a list of all projects
routes.get('/projects', async (req, res) => {
	try {
		const items = await db.projects
			.findAll({})
			.then(
				throwIf(r => !r, 400, 'not found', 'Projects Not Found'),
				throwError(500, 'Database Connection Error')
			);
		sendSuccess(res, 'Projects List')({ items });
	} catch (error) {
		sendError(res)(error);
	}
});

// find a project by id
routes.get(
	'/projects/:id',
	validator.params(projectSchema),
	(req, res, next) => {
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
	}
);

// add a new project
routes.post(
	'/projects/add/project',
	validator.body(projectSchema),
	(req, res, next) => {
		db.projects.create(ret.value).then(newProject => {
			return res.status(200).json(newProject);
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

module.exports = routes;
