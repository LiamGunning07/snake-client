const net = require("net");
const { setupInput, move } = require("./input");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

 
conn.setEncoding("utf8");// interpret incoming data as text

conn.on("connect",() => {
  console.log("Succesfully connected to game server!");
  console.log("Eat as many apples without crashing into walls, or yourself. Goodluck !");
  conn.write("Name:LJG");
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

  const quickChat = {
    1: "Say: Hello World!",
    2: "Say: You Stole my Apple!!",
    3: "Say: I'm getting Big!",
    4: "Say: Watch Out!",
    5: "Say: $#!%*"
  };

  if (key in keyMap) {
    move(conn, keyMap[key]);
  } else if (key in quickChat) {
    conn.write(quickChat[key]);
  }
};

stdin.on("data", (key) => {
  handleUserInput(key);
});


module.exports = { connect, move };