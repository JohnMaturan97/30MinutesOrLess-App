const mongoose = require("mongoose");

const pizzawingSchema = mongoose.Schema({

    name : {type: String , require},
    varients : [] ,
    prices : [] ,
    category : {type: String , require},
    image : {type: String , require},
    description : {type: String , require}

} , {
    timestamps:true,
})

const pizzawingModel = mongoose.model('pizzaswings' , pizzawingSchema)

module.exports = pizzawingModel