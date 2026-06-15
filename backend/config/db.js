const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected Successfully");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
  }
};

module.exports = connectDB;
