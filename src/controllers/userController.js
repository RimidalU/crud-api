import { findAll } from '../models/userModel.js'

const getAllUsers = async(req, res) => {
try {
  const users = await findAll()

  res.setHeader('ContentType', 'application/json');
  res.write(JSON.stringify(users))
  res.end()
} catch (error) {
  console.log(error);
}
} 

export{
  getAllUsers
}