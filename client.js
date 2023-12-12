const net = require("net");

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
});

return conn;

};
console.log("Connecting ...");

module.exports = connect;