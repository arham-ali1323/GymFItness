const http = require('http');

const userData = {
  name: "Test User",
  email: "arhamtest2026@example.com",
  password: "Password1",
  phone: "1234567890"
};

const postData = JSON.stringify(userData);

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Registration Response:', res.statusCode);
    console.log('Response Body:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(postData);
req.end();
