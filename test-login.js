const http = require('http');

const loginData = {
  email: "arhamtest2026@example.com",
  password: "Password1"
};

const postData = JSON.stringify(loginData);

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/auth/callback/credentials',
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
    console.log('Login Response:', res.statusCode);
    console.log('Response Body:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(postData);
req.end();
