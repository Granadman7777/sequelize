const {Router} = require('express');
const UserController = require('../controllers/User.controller');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/user', UserController.findAll);
router.get('/user/:id', UserController.findOnePk);
router.delete('/user/:id', UserController.deleteByPk);
router.put('/user/:id', UserController.updateUser);

module.exports = router;