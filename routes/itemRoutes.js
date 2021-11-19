const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// get all the items from db

router.get('/items', async (req, res) => {
    const items = await Item.find({});

    res.render('items/index', { items });
});

// get the new item form

router.get('/items/new',(req,res)=>{
    res.render('items/new');
})

// add new item from the above form

router.post('/items',async(req,res)=>{
    const newItem ={
        ...req.body
    };

    await Item.create(newItem);
    res.redirect('/items');

})

module.exports = router;