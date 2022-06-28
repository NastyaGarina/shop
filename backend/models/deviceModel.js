const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema(
  {
    category: { type: String, require },
    prices: { type: Number, require },
    gender: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const deviceModel = mongoose.model("device", deviceSchema);

module.exports = deviceModel;
