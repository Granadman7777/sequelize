const yup = require('yup');

module.exports.TASK_SCHEMA = yup.object({
    body: yup.string().required('Task texr is reuired').min(1),
    isDone: yup.boolean().required(),
    deadline: yup.date().required
})