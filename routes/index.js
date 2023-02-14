const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller')

const router = Router();

router.post('/user', UserController.createUser);
router.get('/user', UserController.findAll);
router.get('/user/:id', UserController.findOnePk);
router.delete('/user/:id', UserController.deleteByPk);
router.put('/user/:id', UserController.updateUser);

router.post('/task/userid', TaskController.createTask);
router.get('/task/:userid', TaskController.getAllUserTasks);
router.get('./task-count/:userId', TaskController.getCountofTasks);

module.exports = router;