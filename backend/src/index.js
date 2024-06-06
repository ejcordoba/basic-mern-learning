require("dotenv").config();

const app = require("./app");
require("./database");

//Execute server
async function main() {
  await app.listen(app.get("port"));
  console.log("Server online on port: ", app.get("port"));
}

main();
