const express = require('express');
const Item = require('../models/items');
const router = express.Router();


// Route Get Data
// This is a sample and needs to be changed
router.get('/getAll', (req, res) => {
    // items.find().then(item => res.json(item))
    Item.findOne({token:req.body.token, _id:req.body._id}, (err,doc)=>{
        if(doc){
            console.log('Matched!');
            return res.json(doc.data)
        }
        else{
            console.log("not matched"); 
        }
    })
    console.log('Ethical data');

});


module.exports = router;