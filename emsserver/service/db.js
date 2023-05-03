const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ems')

//Model

const Employee = mongoose.model('Employee', {

    id: String,
    uname: String,
    age: String,
    designation: String,
    salary: String

})

module.exports={Employee}