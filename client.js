const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    // host:'135.23.222.131',
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // send data to server on connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: JG");
  });
  
  conn.on('connect', () => {
    // conn.write("Move: up");
    setInterval(() => {
      conn.write("Move: left")
    }, 50);
  })

  // receive data from server on connection
  conn.on('data', (data) => {
    console.log('Server says: ', data)
  });

  return conn;
}

module.exports = connect;