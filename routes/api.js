const { json } = require('body-parser');
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

router.post('/CreateForm', (req, res) => {
   const currentTime = new Date();
   const newForm = new Item({
       token: hash(currentTime),
       data: []
   })
   var obj;
   newForm.save().then((item) => res.json({"token": item.token, "formID": item._id}));
})

router.delete('/DeleteForm', (req, res) => {
    Item.findById(req.body.formID).then((item) => {
        if (item.token != req.body.token){
            res.json({token: "Invalid Token"})
        }else{
            item.remove().then(() => {
                res.json({success: true})
            })
        }
    }).catch(() => res.json({msg: "Form not found!"}))
})

module.exports = router;