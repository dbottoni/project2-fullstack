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

// should this be belongsToMany? - review, causing a circular reference error
// User.belongsTo(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

Tasks.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

<<<<<<< HEAD
// Tasks.belongsTo(Project, {
//   foreignKey: 'project_id',
//   onDelete: 'SET NULL'
// });
=======
Tasks.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'SET NULL'
});
>>>>>>> 196ba4896c9d1609e083d2d9c6bf582fa1cb7f3e



module.exports = { User, Project, Tasks };