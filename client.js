const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port : 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
const conn = connect();
conn.on("connect", () => {
  console.log("Eat as many apples without crashing into walls, or yourself. Goodluck !")// code that does something when the connection is first established
});
module.exports = {connect};