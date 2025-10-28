const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔍 MONGODB_URI =", process.env.MONGODB_URI); // Debug log
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
