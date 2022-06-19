import 'dotenv/config'
import { createServer } from 'http';
import { getAllUsers, getOneUser } from './src/controllers/userController.js';

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const ENDPOINT = process.env.ENDPOINT;

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
  } else if (req.url.match(/\/api\/users\/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/) && req.method === apiMetod.GET) {
    
    const id = req.url.split('/')[3]
    getOneUser(req, res, id)
  }else{
    res.setHeader('ContentType', 'application/json');
    res.statusCode = 404
    res.write(JSON.stringify({message: `Page '${req.url}' not Found`}))
    res.end()
  }

  // switch (req.url) {
  //   case api:

  //     break;
  //   default:

  //     break;
  // }
});

server.listen(PORT, HOST, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
})