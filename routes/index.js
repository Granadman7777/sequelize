const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const {getUserInstance, validateUser} = require('../middlewares/user.mv');
const {validateTask} = require('../middlewares/task.mv');

const router = Router();

router.post('/user',validateUser ,UserController.createUser);
router.get('/user', UserController.findAll);
router.get('/user/:userId',getUserInstance ,UserController.findOnePk);
router.delete('/user/:iserId', UserController.deleteByPk);
router.put('/user/:userId', getUserInstance ,UserController.updateUser);

router.post('/task/userId',validateTask, getUserInstance ,TaskController.createTask);
router.get('/task/:userId', getUserInstance  ,TaskController.getAllUserTasks);
router.get('./task-count/:userId', getUserInstance ,TaskController.getCountofTasks);

module.exports = router;