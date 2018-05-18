'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subject: DataTypes.STRING,    
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    owner_name: DataTypes.STRING,
    project_id: DataTypes.INTEGER,
    project_name: DataTypes.STRING,
    asignee_id: DataTypes.INTEGER,
    asignee_name: DataTypes.STRING,
    created_date: {
      type: DataTypes.DATE
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    underscore: true
  });
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};