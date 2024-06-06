const app = require("./app");

//Execute server
async function main() {
  await app.listen(app.get("port"));
  console.log("Server online on port: ", app.get("port"));
}

main();
