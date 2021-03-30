const express = require('express');
const Item = require('../models/items');
const router = express.Router();
const uniqid = require('uniqid');

router.get('/getAll', (req, res) => {
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
router.post('/addData', async(req,res) => {
    var hash = uniqid();
    var addData ={
        ...req.body.data,
        hash:hash
    }
    console.log(addData)
    let oldData = await Item.findOne({token:req.body.token,_id:req.body._id})
    // console.log(oldData)
    let newData = await Item.findOneAndUpdate({token:req.body.token, _id:req.body._id},{data:[...oldData.data,addData]},{
        new:true
    })
    console.log(newData)
    return res.json(newData)
})
// route to create a new form 
// route to access all the data /getAll
// post data /addData

module.exports = router;