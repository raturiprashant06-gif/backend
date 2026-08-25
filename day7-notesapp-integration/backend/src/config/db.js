const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("https://localhost:2170/notesapp");
    console.log("mongodb connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDB;