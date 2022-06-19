import { findAll, findById } from '../models/userModel.js'

const getAllUsers = async (req, res) => {
  try {
    const users = await findAll()
    res.setHeader('ContentType', 'application/json');
    res.statusCode = 200
    res.write(JSON.stringify(users))
    res.end()
  } catch (error) {
    console.log(error);
  }
}

const getOneUser = async (req, res, id) => {
  try {
    const user = await findById(id)

    if (!user) {
      res.setHeader('ContentType', 'application/json');
      res.statusCode = 404;
      res.write(JSON.stringify({ message: `User ${id} not Found` }));
      res.end()
    } else {
      res.setHeader('ContentType', 'application/json');
      res.statusCode = 200;
      res.write(JSON.stringify(user));
      res.end()
    }
  
    
  } catch (error) {
  console.log(error);
}
  }


export {
  getAllUsers,
  getOneUser
}