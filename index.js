import 'dotenv/config'
import { createServer } from 'http';
import { getAllUsers, getOneUser, createUser, updateUser, removeUser } from './src/controllers/userController.js';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const ENDPOINT = process.env.ENDPOINT;
const REGEX = /\/api\/users\/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/

const apiMetod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const server = createServer((req, res) => {
  console.log(`Server is running on ${HOST}:${PORT}`);

  if (req.url === ENDPOINT && req.method === apiMetod.GET) {
    getAllUsers(req, res)

  } else if (req.url.match(REGEX) && req.method === apiMetod.GET) {
    const id = req.url.split('/')[3];
    getOneUser(req, res, id);

  } else if (req.url === ENDPOINT && req.method === apiMetod.POST) {
    createUser(req, res)

  } else if (req.url.match(REGEX) && req.method === apiMetod.PUT) {
    const id = req.url.split('/')[3];
    updateUser(req, res, id)

  } else if (req.url.match(REGEX) && req.method === apiMetod.DELETE) {
    const id = req.url.split('/')[3];
    removeUser(req, res, id)

  } else {
    res.setHeader('ContentType', 'application/json');
    res.statusCode = 404
    res.write(JSON.stringify({ message: `Error: path '${req.url}' not Found` }))
    res.end()
  }

});

server.listen(PORT, HOST, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
})