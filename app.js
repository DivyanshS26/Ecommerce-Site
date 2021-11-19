const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDb = require("./seed");
const path = require('path');

mongoose.connect('mongodb://localhost:27017/ecom')
    .then(() => {
        console.log('Db Connected');
    })
    .catch((err) => {
        console.log(err);
    })

// seedDb();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));    

const itemRoute = require('./routes/itemRoutes');

app.get('/', (req, res) => {
    res.send('connected');
})

app.use(itemRoute);



app.listen('8080', () => {
    console.log('Server running at port 8080');
})