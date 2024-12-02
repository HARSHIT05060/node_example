const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    age:{
        type: 'number',
    },
    work:{
        type: 'string',
        enum : ['chef', 'manager', 'waiter'],
        required: true
    },
    mobile:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        unique: true,
        required: true
    },
    address:{
        type: 'string',
    },
    salary:{
        type: 'number',
        required: true
    }
})


//create person model
const person = mongoose.model('Person',personSchema);
module.exports = person;