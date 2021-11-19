const mongoose = require("mongoose");

const itemSchecma = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },
    desc: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true,
        default: '/images/item.jpg'
    },
    price: {
        type: Number,
        min: 0
    }


});


const Item= mongoose.model('Item',itemSchecma);

module.exports = Item;