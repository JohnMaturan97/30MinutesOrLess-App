const express = require("express");

const PizzaWing = require('./models/pizzawingModel')

const app = express();
const db = require("./db");
app.use(express.json());

const  pizzaswingsroute = require('./routes/pizzaswingsRoute')

app.use('/api/pizzaswings/', pizzaswingsroute)

    app.get('/' , (req , res)=>{
        res.send('Server Is Working :D' + port); 
    });


const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`)
