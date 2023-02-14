const {ValidationError} = require('yup');

module.exports.errorHandler = async(err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(404).send(err.message);
    }
}