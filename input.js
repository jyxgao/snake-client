const stdin = process.stdin;
let connection;

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
    } else if(key === '\u0077') {
      connection.write("Move: up");
    } else if(key === '\u0061') {
      connection.write("Move: left");
    } else if(key === '\u0073') {
      connection.write("Move: down");
    } else if(key === '\u0064') {
      connection.write("Move: right");
    } else if(key === '\u0031') {
      connection.write("Say: ohi there");
    } else if(key === '\u0032') {
      connection.write("Say: \\(*^ v ^)/");
    } else if(key === '\u0033') {
      connection.write("Say: I'm on it <(` v`)>");
    } else if(key === '\u0034') {
      connection.write("Say: (/'O`)/*.`");
    } else if(key === '\u0035') {
      connection.write("Say: Good to see y'all")
    }
  });
};

module.exports = { setupInput };