import { v4 as uuidv4 } from 'uuid';
import { usersBD } from '../data/usersBD.js';

const findAll = async () => {
  return new Promise((resolve, reject) => {
    resolve(usersBD)
  })
}

const findById = async (id) => {
  return new Promise((resolve, reject) => {
    const user = usersBD.find((user) => user.id === id)
    resolve(user)
  })
}

const create = async (user) => {
  return new Promise((resolve, reject) => {
    const newUser = {id: uuidv4(), ...user}
    usersBD.push(newUser)
    resolve(newUser)
  })
}


export {
  findAll,
  findById,
  create
}