const express = require('express');
const qrrouter = express.Router();
const {QRCode} = require('./QR.model');
const qrcode = require('qrcode');
// const qrCodeGenerator = require('./qrcode.route');


qrrouter.post('/', async (req, res) => {
    const { text } = req.body;
  
    try {
    
      const imageBuffer = await qrcode.toBuffer(text);
      const image = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  
      const qrCode = new QRCode({ text, image });
      await qrCode.save();
      res.status(201).json({ qrCode });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports = {qrrouter};
