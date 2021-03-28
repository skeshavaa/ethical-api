const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const hash = require('object-hash')

// Bring in Item Model
const Item = require('../models/items')

// Route Get Data
// This is a sample and needs to be changed
router.get('/', (req, res) => {
    Item.find().then(items => res.json(items))
});

router.post('/CreateForm', (req, res) => {
   const currentTime = new Date();
   const newForm = new Item({
       token: hash(currentTime),
       data: []
   })
   var obj;
   newForm.save().then((item) => res.json({"token": item.token, "FormID": item._id}));
})

module.exports = router;