const net = require("net");
const connect = require("./client")

const conn = connect();

conn.setEncoding("utf8"); // interpret data as text

conn.on("data", (data) => {
  console.log("Message from client: ", data);
});