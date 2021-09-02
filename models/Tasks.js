const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tasks extends Model {}

Tasks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    task_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    task_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    task_due: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tasks'
  }
);

module.exports = Tasks;
