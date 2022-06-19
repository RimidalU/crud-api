import { usersBD } from '../data/usersBD.js';

const findAll = async () => {
return new Promise((resolve, reject) => {
resolve(usersBD)
})
}

export{
  findAll
}