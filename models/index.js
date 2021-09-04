const User = require('./User');
const Project = require('./Project');
const Tasks = require('./Tasks');
const Comment = require('./Comment')

//need to create associations
User.hasMany(Project, {
  foreignKey: 'user_id'
});

User.hasMany(Tasks, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

//not sure this is associated correctly
Project.hasMany(Tasks, {
  foreignKey: 'project_id',
});

// should this be belongsToMany? - review, causing a circular reference error
// User.belongsTo(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });
Comment.belongsTo(User, {
  foreignKey: 'user_id'
  // onDelete: 'SET NULL'
});

Tasks.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Tasks.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Project, Tasks, Comment };