const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const conn = async (req, res, next) => {
//   try {
//     await mongoose

//       .connect(
//         "mongodb+srv://rafiullah786:salams.brothers@cluster0.jjv7rsk.mongodb.net/blog?retryWrites=true&w=majority"
//       )
//       .then(() => {
//         console.log("Connected to MongoDB");
//       });
//   } catch (error) {
//     res.send("Error connecting to MongoDB");
//     console.log(error);

//   }
// };
// conn();

const mongoAtlasUri =
  "mongodb+srv://rafiullah786:salams.brothers@cluster0.jjv7rsk.mongodb.net/blog?retryWrites=true&w=majority";

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

app
  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .listen(3000, () => {
    console.log("Server started on port 3000");
  });
