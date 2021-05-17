const mongoose = require("mongoose")

var mongoURL = 'mongodb+srv://johnmaturan7:mJohn@101@cluster0.rz4km.mongodb.net/mern-pizzawing'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', () => {
    console.log('MongoDB Connected Succesfully');
})

db.on('error', () => {
    console.log('Database Connected Failed');
})

module.exports = mongoose