import { createServer } from 'http';
import { users } from './src/users.js';

const HOST = 'localhost';
const PORT = 3000;
const API = '/api/user';

let bd = JSON.stringify(users);
let textResp;

const server = createServer((req, res) => {
  console.log(`Server is running on ${HOST}:${PORT}`);

  switch (req.url) {
    case API:
      textResp = bd;
      res.statusCode = 200
      break;
    default:
      textResp = `Page '${req.url}' not Found`
      res.statusCode = 404
      break;
  }

  res.setHeader('ContentType', 'application/json');
  res.write(textResp)
  res.end()
});

server.listen(PORT, HOST, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
})