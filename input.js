let connection;

const move = (conn, direction) => {
  const command = `Move: ${direction}`;
  connection.write(command);
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = (key) => {
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
      connection.write(quickChat[key]);
    }
  };
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};


module.exports = { setupInput, move };



