const express = require("express");
const router = express.Router();
const Device = require("../models/deviceModel");

router.get("/getalldevices", async (req, res) => {
  try {
    const devices = await Device.find({});
    res.send(devices);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/adddevice", async (req, res) => {
  const device = req.body.device;

  try {
    const newdevice = new Device({
      category: device.category,
      prices: device.prices,
      gender: device.gender,
      image: device.image,
      description: device.description,
    });
    await newdevice.save();
    res.send("New device added successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getdevicebyid", async (req, res) => {
  const deviceid = req.body.deviceid;
  try {
    const device = await Device.findOne({ _id: deviceid });
    res.send(device);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/editdevice", async (req, res) => {
  const editeddevice = req.body.editeddevice;

  try {
    const device = await Device.findOne({ _id: editeddevice._id });

    (device.category = editeddevice.category),
      (device.prices = editeddevice.prices),
      (device.gender = editeddevice.gender),
      (device.image = editeddevice.image),
      (device.description = editeddevice.description),
      await device.save();

    res.send("Device details edited successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletedevice", async (req, res) => {
  const deviceid = req.body.deviceid;

  try {
    await Device.findOneAndDelete({ _id: deviceid });
    res.send("Device deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
