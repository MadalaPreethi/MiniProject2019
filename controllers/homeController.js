//This file is used to create a route for displaying "admins" on screen
//requesting express
const express = require("express");


//reqesting mongoose
const mongoose = require('mongoose');

//Now creating a obj to render the view
const Marks = mongoose.model("Marksrecord");

//creating router obj using "Router" method of express
var router = express.Router();

router.get('/',(req,res)=>{
    res.render("home/checkMarks",{
        viewTitle :"Check your marks here!!!"
    });
});


router.post("/",(req,res)=>{
   getRecords(req,res);
});
//To get data from mongodb
function getRecords(req,res){
    var mark =new Marks();
    //acquiring request fields
       var r =req.body.rolls;
       var e =req.body.exams;
   Marks.find({rollno:r,examid:e},function(err,docs){
        if(err){
            console.log("Error in retrieving marks :"+err);
        }
        else{
            res.render('home/checkMarks',{
                viewTitle :"Your marks!!",
                list :docs
            });
        }
    });

}
//to export the router
module.exports=router;
//Configure route in server.js