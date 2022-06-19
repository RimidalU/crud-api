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

export {
  findAll,
  findById
}