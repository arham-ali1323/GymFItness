const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/auth/session',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Session Response:', res.statusCode);
    console.log('Response Body:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.end();
