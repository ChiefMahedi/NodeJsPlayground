import http from 'http';

const messageData = JSON.stringify({
  'message': 'Greetings from Node.js!',
});

const requestOptions: http.RequestOptions = {
  hostname: '127.0.0.1',
  port: 8000,
  path: '/echo',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(messageData),
  },
};

const request: http.ClientRequest = http.request(requestOptions, (response: http.IncomingMessage) => {
  console.log(`STATUS: ${response.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  response.on('end', () => {
    console.log('No more data in response.');
  });
});

request.on('error', (error) => {
  console.error(`Problem with request: ${error.message}`);
});

request.write(messageData);
request.end();
