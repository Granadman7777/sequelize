const {User} = require('../models');

module.exports.createUser = async (req, res, next) => {
    try {
       const {body} = req;
       const createUser = await User.create(body); // добавляем юзера в БД
       return res.status(201).send(sreateUser); // закрываем соединение
    } catch (error) {
        next (error);
    }
}

module.exports.findAll = async (req, res, next) => {
    try {
        const result = await User.findAll();
        return res.status(200).rend(results);
    } catch (error) {
        next (error);
    }
}

module.exports.findOnePk = async (req, res, next) => {
  try {
    const {params: {id}} = req;
    const findUser = User.findByPk(id);
    const {userInstance} = req;
    return res.status(200).send(userInstance);
  } catch(error) {
    next(error);
  }
}

module.exports.deleteByPk = async (req, res, next) => {
  try {
    const {params: {id}} = req;
     const rowsCount = await User.destroy(
      {
        where: {
          id
        }
      }
    ) 

    if(rowsCount) {
      return res.status(200).send('Succesfull delete')
     } else {
      return res.status(204).send();
     }
  } catch (error) {
    next (error);
  }
}

//module.exports.updateUser = async (req, res, next) => {
//  try { const {params: {id}} = req;
//   const result = User.update(body , {
//      were: {
//        id
//      }
//    })
//    return res.status(200).send();
//  } catch (error) {
//    next (error);
//  }
//}


module.exports.updateUser = async (req, res, next) => {
  try { 
    const {params: {id}} = req;
   // const foundedUser = await User.findByPk(id);
    const {userInstance} = req;
    const result = await userInstance.update(body);
     return res.status(200).send(result);
 } catch (error) {
  next (error);
 } 
}