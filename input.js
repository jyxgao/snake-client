const { stdin } = require('process');

// handle user input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;  
};

// handling Ctrl+C User Input to exit game
const handleUserInput = function() {
  stdin.on('data', (key) => {
    if(key === '\u0003') {
      process.exit();
    };
  })
};

module.exports = { setupInput };