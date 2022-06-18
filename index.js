import { createServer } from 'http';
import { users } from './src/users.js';
import 'dotenv/config'

const host = process.env.HOST;
const port = process.env.PORT;
const api = process.env.API;

let bd = JSON.stringify(users);
let textResp;

const server = createServer((req, res) => {
  console.log(`Server is running on ${host}:${port}`);

  switch (req.url) {
    case api:
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

server.listen(port, host, (err) => {
  err ? console.log(err) : console.log(`Listening port ${port}`);
})