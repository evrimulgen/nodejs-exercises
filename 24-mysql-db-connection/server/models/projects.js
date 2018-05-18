'use strict';
module.exports = (sequelize, DataTypes) => {
	var Projects = sequelize.define(
		'Projects',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			code: DataTypes.STRING,
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			owner_id: DataTypes.INTEGER,
			owner_name: DataTypes.STRING,
			category_id: DataTypes.INTEGER,
			creadted_date: {
				type: DataTypes.DATETIME
			},
			end_date: {
				type: DataTypes.DATETIME
			}
		},
		{
			timestamps: false,
			freezeTableName: true,
			underscore: true
		}
	);
	Projects.associate = function(models) {
		// associations can be defined here
	};
	return Projects;
};
