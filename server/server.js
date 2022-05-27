require("dotenv").config();
const http = require("http");
const app = require("./src");
const mongoose = require("mongoose");

const server = http.createServer(app);

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, (err, result) => {
  if (err) throw err;
  server.listen(port, () => {
    console.log(`server stated at ${port}`);
  });
});
