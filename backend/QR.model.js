const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, required: true },
});

const QRCode = mongoose.model('QRCode', qrCodeSchema);

module.exports = {QRCode};
