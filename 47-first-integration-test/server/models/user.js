'use strict';
module.exports = (sequelize, DataTypes) => {
	var Users = sequelize.define(
		'Users',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.STRING
		},
		{
			timestamps: false,
			freezeTableName: true,
			underscore: true
		}
	);
	Users.associate = function(models) {
		// associations can be defined here
	};
	return Users;
};
