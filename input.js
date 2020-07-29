const stdin = process.stdin;
let connection;

const { w, a, s, d, msgObj } = require('./constants');

// handle user input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  // move();
  return stdin;  
};

// handling user input
const handleUserInput = function() {
  stdin.on('data', (key) => {
    // exit if Ctrl+C
    if(key === '\u0003') {
      process.exit();
    //handling w, a, s, d movements
    } else if(key === w) {
      connection.write("Move: up");
    } else if(key === a) {
      connection.write("Move: left");
    } else if(key === s) {
      connection.write("Move: down");
    } else if(key === d) {
      connection.write("Move: right");
    } else if (key in msgObj) {
          connection.write("Say: " + msgObj[key]);
    }
  });
};

module.exports = { setupInput };