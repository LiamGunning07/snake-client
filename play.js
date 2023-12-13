const net = require("net");

const { connect, move } = require("./client")

const conn = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

conn.setEncoding("utf8"); // interpret data as text

conn.on("data", (data) => {
  console.log("Message from client: ", data);
});