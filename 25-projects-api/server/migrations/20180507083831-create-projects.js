'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Projects', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			code: {
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			owner_name: {
				type: Sequelize.STRING
			},
			owner_id: {
				type: Sequelize.INTEGER
			},
			category_id: {
				type: Sequelize.INTEGER
			},
			created_date: {
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
		return queryInterface.dropTable('Projects');
	}
};
