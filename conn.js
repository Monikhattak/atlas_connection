const mongoose = require("mongoose");
const conn = async (req, res, next) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://rafiullah786:salams.brothers@cluster0.jjv7rsk.mongodb.net/blog?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Connected to MongoDB");
      });
  } catch (error) {
    res.send("Error connecting to MongoDB");
    console.log(error);
  }
};
conn();
