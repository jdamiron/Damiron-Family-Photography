const express = require("express");

const log = console.log;
const app = express();
const path = require("path");

const PORT = 8080;

//Data Parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.post("/email", (req, res) => {});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  log("Sever is starting on PORT, ", 8080);
});
