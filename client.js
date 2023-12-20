const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect",() => {
    console.log("Succesfully connected to game server!");
    console.log("Eat as many apples without crashing into walls, or yourself. Goodluck !");
    conn.write("Name: LJG");
  });

  return conn;

};

module.exports = { connect };