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

router.post("/addpizzawing", async(req, res) => {
    
    const pizzawing = req.body.pizzawing

   try {
    const newpizzawing = new PizzaWing({
        name : pizzawing.name,
        image :pizzawing.image,
        varients : ['small','medium','large'],
        description : pizzawing.description,
        category : pizzawing.category,
        prices : [pizzawing.prices]
    })
    await newpizzawing.save()
    res.send('New Pizza & Wing Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
});

router.post("/getpizzawingbyid", async(req, res) => {

    const pizzawingid = req.body.pizzawingid
   
    try {
        const pizzawing = await PizzaWing.findOne({_id : pizzawingid})
        res.send(pizzawing)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
     
   });

   router.post("/editpizzawing", async(req, res) => {

    const editedpizzawing = req.body.editedpizzawing

    try {
        const pizzawing = await PizzaWing.findOne({_id : editedpizzawing._id})
        
        pizzawing.name= editedpizzawing.name,
        pizzawing.description= editedpizzawing.description,
        pizzawing.image= editedpizzawing.image,
        pizzawing.category=editedpizzawing.category,
        pizzawing.prices = [editedpizzawing.prices]

        await pizzawing.save()

        res.send('Pizza & Wing Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deletepizzawing", async(req, res) => {

    const pizzawingid = req.body.pizzwingaid

  try {
    await PizzaWing.findOneAndDelete({_id : pizzawingid})
    res.send('A Pizza or Wing was Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});

module.exports = router;