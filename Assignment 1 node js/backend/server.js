const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/free-memory", (req, res) => {
  res.json({
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
  });
});

app.get("/user-info", (req, res) => {
  res.json({
    platform: os.platform(),
    userInfo: os.userInfo(),
    cpu: os.arch(),
    uptime: os.uptime(),
    homedir: os.homedir(),
    hostname: os.hostname(),
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
