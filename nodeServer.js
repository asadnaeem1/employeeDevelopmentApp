const express = require("express");
const app = express();
const next = require("next");
const nextConf = require("./next.config");

const nextApp = next({ conf: nextConf, dev: false });
const handle = nextApp.getRequestHandler();

app.all("*", (req, res) => {
  handle(req, res);
});

app.listen(process.env.PORT | 3000, () => {
  console.log("Server Running.");
});
