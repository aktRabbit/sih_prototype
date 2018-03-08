const router=require('express').Router();
const river = require('../models/river-model');
const mongoose = require('../databases/Bihar');

router.get('/',(req,res)=>{
  river.find().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  })
});

router.post('/',(req,res)=>{
  console.log(req.body);
  var river_obj=new river({
    name:req.body.name,
    quantity:req.body.quantity,
    tou:req.body.tou

});
river_obj.save().then((doc)=>{
  res.send("tum pro h baba");
  console.log(doc);
},(err)=>{
  console.log(err);
});
});

module.exports=router;
