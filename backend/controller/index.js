const login = require('./loginController');
const register = require('./registerController');
const profile = require('./profileController');
const project = require('./projectController');
const task = require('./taskController');
const user = require('./userController');

module.exports ={
	login,
	register,
	profile,
	project,
	task,
	user,
};