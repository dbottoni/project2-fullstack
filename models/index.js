const User = require('./User');
const Tasks = require('./Tasks');


//need to create associations
// User.hasMany(Project, {
//   foreignKey: 'user_id'
// });

User.hasMany(Tasks, {
  foreignKey: 'user_id'
});




Tasks.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});






// Tasks.belongsTo(Project, {
//   foreignKey: 'project_id',
//   onDelete: 'SET NULL'
// });



module.exports = { User, Tasks };