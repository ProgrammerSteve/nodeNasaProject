require("dotenv").config();
const PORT = process.env.PORT || 8000;

const mongoose = require("mongoose");
const { mongoConnect } = require("./services/mongo");
const app = require("./app");
const http = require("http");
const server = http.createServer(app);

const { loadPlanetsData } = require("./models/planets.model");

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}...`);
  });
}
startServer();
