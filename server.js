const express = require("express");

const PizzaWing = require('./models/pizzaModel')

const db = require("./db");

const app = express();

app.use(express.json());

    app.get('/' , (req , res)=>{
        res.send('Server Is Working :D' + port); 
    });

    app.get("/getpizzaswings", (req, res) => {

        PizzaWing.find({}, (err, docs) => {
            if(err) {
                console.log(err);
            } else{
                    res.send(docs);
                }
        })

    });


const port = process.env.PORT || 8003;

app.listen(port, () => `Server running on port port 🔥`)