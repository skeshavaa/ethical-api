const express = require('express');
const items = require('../models/items');
const router = express.Router();

// Bring in Item Model
const itme = require('../models/items')

// Route Get Data
// This is a sample and needs to be changed
router.get('/', (req, res) => {
    items.find().then(items => res.json(items))
});


module.exports = router;