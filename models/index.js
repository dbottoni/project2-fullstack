const User = require('./User');
const Project = require('./Project');
const Tasks = require('./Tasks');

//need to create associations
// User.hasMany(Project, {
//   foreignKey: 'user_id'
// });

User.hasMany(Tasks, {
  foreignKey: 'user_id'
});

// Project.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

//not sure this is associated correctly
// Project.hasMany(Tasks, {
//   foreignKey: 'project_id',
// });

Tasks.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Tasks.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Project, Tasks };