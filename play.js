const net = require('net');
const stdin = process.stdin;
// establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    // host:'135.23.222.131',
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', (data) => {
    console.log('Server says: ', data)
  });

  return conn;
}

console.log('Connecting...');
connect();