const express = require("express");
const router = express.Router();
const PizzaWing = require('../models/pizzawingModel');

router.get("/getallpizzaswings", async (req, res) => {

    try {
        const pizzaswings = await PizzaWing.find({})
        res.send(pizzaswings)
    } catch(error) {
        return res.status(400).json({message:error })
    }
});

module.exports = router;