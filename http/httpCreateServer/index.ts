import http from 'http';
const server:  http.Server = http.createServer((req : http.IncomingMessage, res: http.ServerResponse) => {
  let requestData = '';

  req.on('data', (chunk) => {
    requestData += chunk;
  });

  req.on('end', () => {
    console.log('Request data:', requestData);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Request received successfully.');
  });
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server listening on port 8000');
});