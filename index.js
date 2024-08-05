const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;
  query = parseUrl.query;

  const a = parseFloat(query.a);
  const b = parseFloat(query.b);

  let result;

  switch(pathname) {
    case '/add':
      result = a + b;
      break;
    case '/subtract':
      result = a - b;
      break;
    case '/multiply':
      result = a * b;
      break;
    case '/divide':
      if (b === 0) {
        result = 'Error: Division by zero';
      } else {
        result = a / b;
      }
      break;
    default:
      result = 'Error: Invalid operation';
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(result.toString());
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})