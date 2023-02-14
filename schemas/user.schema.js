const yup = require('yup');
const {USER_SCHEMA} = require('../schemas/user.schemas');

module.exports.USER_SCHEMA = yup.object({
    firstName: yup.string().required('First name is required').min(1),
    lastName: yup.string().required('Last name is required').min(1),
    email: yup.string().required('Email is required').email('Invalid Email'),
    password: yup.string().required('Password is reuired').min(8),
    birthday: yup.date(),
    gender: yup.string()
})