const Joi = require('joi');

const projectSchema = {
	id: Joi.number().required(),
	name: Joi.string()
		.min(1)
		.max(50),
	description: Joi.string()
		.min(1)
		.max(100)
};

module.exports = projectSchema;
