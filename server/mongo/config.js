const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://allen19dx30:cuttapi2000@cluster0.ck5t5bn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection;
db.once("open", () => console.info("Connected to MongoDB Sample"));
db.on("error", console.error.bind(console, "connection error:"));

module.exports = mongoose;
