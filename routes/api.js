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
    var userID = uniqid();
    var addData ={
        ...req.body.data,
        userID:userID
    }
    console.log(addData)
    let oldData = await Item.findOne({token:req.body.token,_id:req.body.formID})
    // console.log(oldData)
    let newData = await Item.findOneAndUpdate({token:req.body.token, _id:req.body.formID},{data:[...oldData.data,addData]},{
        new:true
    })
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

router.delete('/deleteUser/:userID', (req,res) => {
    var userFormData;
    Item.findById(req.body.formID).then((err,doc)=>{
        if(doc){
            userFormData=doc.data;
            var filteredData = userFormData.filter(item=>item.userID!=req.params.userID)
            var result = await Item.findByIdAndUpdate(req.body.formID,{data:filteredData},{new:true})
            console.log(result)
            res.json({msg: "Your information has been deleted!"})
        }
        else{
            res.json({msg: "Invalid FormID"})
        }
    })
    // console.log(currentUser)     
    // "_id":"605ffed0d5ee320b30442012",
    // "token":"a3496e5c314933022e4194e0c3f141ad3a21c4d1",
    // "userId":"16x8mmckmxiqqun"
})
// user -> email aur name -> hash(email+name) -> 4letters + email + 4digit secret pin
module.exports = router;