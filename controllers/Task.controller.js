 const {Task, User} = require('./models');

module.exports.createTask = async (req, res, next) => {
    try {
        const {body, userInstance} = req;
        const result = await user.createTask(body);
        return res.status(201).send(result);
    } catch (error) {
        next (error);
    }
}

module.exports.getAllUserTasks = async (req, res, next) => {
    try {
        const {userInstance} = req;
       
        const tasks = await user.getTasks();
        return res.status(200).send(tasks);
    } catch (error) {
        next (error);
    }
}

module.exports.getCountofTasks = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const tasks = await userInstance.countTasks();
        return res.status(200).send(`${tasks}`);
    } catch (error) {
        next(error);
    }
}