import 'dotenv/config'
import { createServer } from 'http';
import { getAllUsers } from './src/controllers/userController.js';

const host = process.env.HOST;
const port = process.env.PORT;
const api = process.env.API;

let resBody;

const server = createServer((req, res) => {
  console.log(`Server is running on ${host}:${port}`);

  if (req.url === api) {
    getAllUsers(req, res)
  } else {
    res.setHeader('ContentType', 'application/json');
    res.statusCode = 404
    res.write(JSON.stringify(`Page '${req.url}' not Found`))
    res.end()
  }

  // switch (req.url) {
  //   case api:

  //     break;
  //   default:

  //     break;
  // }
});

server.listen(port, host, (err) => {
  err ? console.log(err) : console.log(`Listening port ${port}`);
})