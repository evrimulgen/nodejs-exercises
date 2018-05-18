const Joi = require('joi');

const projectSchema = Joi.object({
	id: Joi.number().required(),
	name: Joi.string()
		.min(1)
		.max(50),
	description: Joi.string()
		.min(1)
		.max(100)
});

module.exports = projectSchema;
