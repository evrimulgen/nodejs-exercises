'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Tasks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			subject: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.STRING
			},
			owner_id: {
				type: Sequelize.INTEGER
			},
			owner_name: {
				type: Sequelize.STRING
			},
			project_id: {
				type: Sequelize.INTEGER
			},
			project_name: {
				type: Sequelize.STRING
			},
			asignee_id: {
				type: Sequelize.INTEGER
			},
			asignee_name: {
				type: Sequelize.STRING
			},
			created_date: {
				allowNull: true,
				type: Sequelize.DATE
			},
			start_date: {
				allowNull: true,
				type: Sequelize.DATE
			},
			end_date: {
				allowNull: true,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Tasks');
	}
};
