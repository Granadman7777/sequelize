const {TASK_SCHEMA} = require('../schemas/task.schema');

module.exports.validateTask = async(req, res, next) => {
    try {
        const {body} = req;
        const validateTask = User.findByPk(userId);
        if(!user) {
            throw new Error('User not found')
        }
        req.userInstance = user;
        next();
    }catch (error) {
        next(error);
    }
}