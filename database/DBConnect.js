const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGO_URI;

const DBConnect = async () => {
  if (!mongoose.connections[0].readyState) {
    // Use current db connection
    await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,

      useNewUrlParser: true,
    });
  }
};

module.exports = DBConnect;
