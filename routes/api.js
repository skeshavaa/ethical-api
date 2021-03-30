const express = require('express');
const Item = require('../models/items');
const router = express.Router();
const uniqid = require('uniqid');


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
// {
//     token
//     id
//     data[
//         {},
//         {

//         }
//     ]
// }
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
// route jisse form banega blank data
// route jisse form ka sara data access kr payga
// post data

module.exports = router;