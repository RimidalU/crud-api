import { findAll, findById, create } from '../models/userModel.js'

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

const createUser = async (req, res) => {
  try {
    let body='';
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', async () => {
      const { username, age, hobbies } = JSON.parse(body)

      const user = {
        username,
        age,
        hobbies,
      }

      const newUswe = await create(user)
      res.setHeader('ContentType', 'application/json');
      res.statusCode = 201;
      res.write(JSON.stringify(newUswe));
      res.end()
    })

  } catch (error) {
    console.log(error);
  }
}


export {
  getAllUsers,
  getOneUser,
  createUser
}