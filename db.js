const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://borntocode1997:mJohn101@30minutesorless.md74azi.mongodb.net/";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connected Succesfully");
});

db.on("error", () => {
  console.log("Database Connected Failed");
});

module.exports = mongoose;
