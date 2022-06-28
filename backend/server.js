const express = require("express");
const Device = require("./models/deviceModel");

const app = express();
const db = require("./db.js");

const devicesRoute = require("./routes/devicesRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

let bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/devices/", devicesRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);
app.get("/", (req, res) => {
  res.send("work");
});

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port");
