const { conn } = require("./src/db.js");
const server = require("./src/server.js");
const PORT = 3001;

try {
  server.listen(PORT, async () => {
    await conn.sync({ force: true });
    console.log(`Server listen in port: ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
