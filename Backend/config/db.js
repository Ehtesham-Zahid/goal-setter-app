const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin1234@todocluster.my3qxn9.mongodb.net/?retryWrites=true&w=majority&appName=todoCluster"
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: todoCluster`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
