const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bidapp')
mongoose.connection.once('open', function() { console.log('connected to database') })
mongoose.connection.on('error', function(error) { console.log('Error: ' + error) })

const userSchema = new mongoose.Schema({
    username: String,
    password: String//,
    // email: String,
    // dateCreated: Date.now,
    // phone: String,
})

const User = mongoose.model('user', userSchema)

module.exports = { User }