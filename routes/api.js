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

router.post('/addData', (req,res) => {
    Item.findOne({token:req.body.token, _id:req.body._id}, (err,doc)=> {
        const arr = [];
        if(doc){
            return res.json(doc.data)
        }else{
            console.log("not matched"); 
            return res.send('NOT MATCHED')
        }
    })
})


module.exports = router;