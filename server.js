const express = require("express");

const PizzaWing = require("./models/pizzawingModel");

const app = express();
const db = require("./db");
app.use(express.json());
const path = require("path");
const pizzaswingsroute = require("./routes/pizzaswingsRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzaswings/", pizzaswingsroute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("30minutesorless-frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "30minutesorless-frontend/build/index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
