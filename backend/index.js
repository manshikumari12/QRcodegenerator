const express = require('express');

const {qrrouter} = require('./QR.route');
var cors = require('cors')

 

const connectDB = require('./db'); 


const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.use('/qrcodes', qrrouter);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
