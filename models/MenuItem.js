const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    price:{
        type: 'number',
        required: true
    },
    taste:{
        type: 'string',
        enum:['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type: 'boolean',
        default:false
    },
    ingredients:{
        type:['string'],
        default:[]
    },
    num_sales:{
        type: 'number',
        default:0
    },
})

const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem;