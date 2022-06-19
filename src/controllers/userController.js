import { findAll, findById, create, update } from '../models/userModel.js'

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
    let body = '';
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

const updateUser = async (req, res, id) => {
  try {
    const user = await findById(id)
console.log(user);
    if (!user) {
      res.setHeader('ContentType', 'application/json');
      res.statusCode = 404;
      res.write(JSON.stringify({ message: `User ${id} not Found` }));
      res.end()
    } else {

      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString()
      })
      req.on('end', async () => {
        const { username, age, hobbies } = JSON.parse(body)

        const newUser = {
          username: username || user.username,
          age: age || user.age, 
          hobbies: hobbies || user.hobbies,
        }
        const updateUser = await update(id, newUser)
        res.setHeader('ContentType', 'application/json');
        res.statusCode = 200;
        res.write(JSON.stringify(updateUser));
        res.end()
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser
}