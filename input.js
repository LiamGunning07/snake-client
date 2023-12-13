const { connect } =  require("./client");
let connection;

const move = (conn, direction) => {
  const command = `Move: ${direction}`;
  conn.write(command);
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  // Exit the game if the user presses Ctrl + C
  if (key === '\u0003') {
    process.exit();
  }

  const keyMap = {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right'
  };

  if (key in keyMap) {
    connection.write(`Move: ${keyMap[key]}`);
    //move(conn, keyMap[key]);
  }
};

module.exports = { setupInput, move };



