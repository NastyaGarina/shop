const mongoose = require("mongoose");

let mongoURL =
  "mongodb+srv://daniiil:root@cluster.yzc7f.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on("connected", () => {
  console.log("connect");
});
db.on("error", () => {
  console.log("dont connect");
});
module.exports = mongoose;
