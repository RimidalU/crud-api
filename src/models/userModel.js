import { v4 as uuidv4 } from 'uuid';
import { usersArr } from '../data/usersBD.js';

let usersBD = usersArr;

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

const update = async (id, newUser) => {
  return new Promise((resolve, reject) => {
    const index = usersBD.findIndex((user) => user.id === id)
    usersBD[index] = {id, ...newUser}    
    resolve(usersBD[index])
  })
}

const remove = async (id) => {
  return new Promise((resolve, reject) => {
    usersBD = usersBD.filter((user) => user.id !== id)
    resolve(id)
  })
}

export {
  findAll,
  findById,
  create,
  update,
  remove
}