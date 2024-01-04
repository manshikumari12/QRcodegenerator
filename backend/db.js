const mongoose = require('mongoose');



const connectDB = mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.zpmeevs.mongodb.net/QRCode?retryWrites=true&w=majority")


module.exports = {connectDB};
