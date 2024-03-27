const http = require("http");
const express = require("express");
const consolidate = require("consolidate");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes"); // File that contains our endpointsss

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(
  bodyParser.json({
    limit: "5mb",
  })
);
app.use(cors());
// connect to Database
console.log(process.env.DB_URI);
mongoose
  .connect(
    "mongodb+srv://sahak:sahak@cluster0.lknrzhn.mongodb.net/cluster0?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to dbbb");
  })
  .catch((err) => {
    console.error(err);
  });
app.use("/", routes);

const server = http.Server(app);
const portNumber = 8000;

server.listen(portNumber, () => {
  // Runs the server on port 8000
  console.log(`Server listening at port ${portNumber}`);
});
