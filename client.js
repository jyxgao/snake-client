const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    // host:'135.23.222.131',
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // receive data from server on connection
  conn.on('connect', (data) => {
    console.log('Server says: ', data)
  });

  return conn;
}

module.exports = connect;