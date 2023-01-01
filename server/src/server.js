require("dotenv").config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.arc3nbp.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
const mongoose = require("mongoose");
const app = require("./app");
const http = require("http");
const server = http.createServer(app);

const { loadPlanetsData } = require("./models/planets.model");

mongoose.connection.once("open", () => {
  console.log("mongoDB connection ready!");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}...`);
  });
}
startServer();
