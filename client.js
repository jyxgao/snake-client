const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    // host: 'localhost',
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // send data to server on connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: JG");
  });

  // move snake on connection with timeout
  conn.on('connect', () => {
    // conn.write("Move: up");
    setTimeout(() => {
      conn.write("Move: up")
    }, 50);
  })

  // receive data from server on connection
  conn.on('data', (data) => {
    console.log('Server says: ', data)
  });

  return conn;
}

module.exports = { connect };