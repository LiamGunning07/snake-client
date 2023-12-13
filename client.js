const net = require("net");
const { setupInput } = require("./input");

const move = (conn, direction) => {
  const command = `Move: ${direction}`;
  conn.write(command);
};
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port : 50541 // PORT number here,
  });

 
conn.setEncoding("utf8");// interpret incoming data as text

conn.on("connect",() => {
  console.log("Succesfully connected to game server!");
  console.log("Eat as many apples without crashing into walls, or yourself. Goodluck !");

  conn.write("Name:LJG");
//  setTimeout(() => move(conn, 'up'), 100); // First move up
//  setTimeout(() => move(conn, 'up'), 200); // Second move up
 // setTimeout(() => move(conn, 'up'), 300); // Third move up
});

return conn;

};

const conn = connect()
const stdin = setupInput();
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
    move(conn, keyMap[key]);
  }
};

stdin.on("data", (key) => {
  handleUserInput(key);
});


module.exports = { connect, move };