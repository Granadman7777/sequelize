const {User} = require('../models');
const {USER_SCHEMA} = require('../schemas/user.schema');
const UserError = require('../errors/User.error');

module.exports.getUserInstance = async(req, res, next) => {
    try {
        const {params: {userId}} = req;
        const user = User.findByPk(userId);
        if(!user) {
            throw new UserError('User not found')
        }
        req.userInstance = user;
        next();
    }catch (error) {
        next(error);
    }
}

module.exports.validateUser = async(req, res, next) => {
    try {
        const {body} = req;
        const validated = await USER_SCHEMA.validate(body);
        if(validated) {
            next();
        }
    } catch (error) {
        next (error);
    }
}