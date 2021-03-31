const { json } = require('body-parser');
const express = require('express');
const Item = require('../models/items');
const router = express.Router();
const uniqid = require('uniqid');
const hash = require('object-hash')

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
    var userId = uniqid();
    var addData ={
        ...req.body.data,
        userId:userId
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

router.delete('/delete-user/:userId', (req,res) => {
    var userFormData;
    Item.findOne({token:req.body.token, _id:req.body._id}, async(err,doc)=>{
        if(doc){
            userFormData=doc.data;
            var filteredData = userFormData.filter(item=>item.userId!=req.params.userId)
            var result = await Item.findOneAndUpdate({token:req.body.token, _id:req.body._id},{data:filteredData},{new:true})
            console.log(result)
            res.json(result)
        }
        else{
            console.log("not matched"); 
        }
    })
    // console.log(currentUser)     
    // "_id":"605ffed0d5ee320b30442012",
    // "token":"a3496e5c314933022e4194e0c3f141ad3a21c4d1",
    // "userId":"16x8mmckmxiqqun"
})
// user -> email aur name -> hash(email+name) -> 4letters + email + 4digit secret pin
module.exports = router;