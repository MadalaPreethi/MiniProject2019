//This file is used to create a route for displaying "marks" on screen
//requesting express
const express = require("express");


//reqesting mongoose
const mongoose = require('mongoose');

//Now creating a obj to render the view
const Marks = mongoose.model("Marksrecord")
//creating router obj using "Router" method of express
var router = express.Router();
router.get('/',(req,res)=>{
    res.render("admin/insert",{
        viewTitle : "Insert Marks Record"
    });
});

//calling insertMarks function to insert data into db
router.post("/",(req,res)=>{
    insertMarks(req,res);
});

//To insert data into "Mongodb" as a record we create a new function "insertRecord"
function insertMarks(req,res){
var marks = new Marks();

//now to populate the record from view
marks.rollno = req.body.rollno;
marks.examid = req.body.examid;
marks.subject= req.body.subject;
marks.point = req.body.point;
marks.grade = req.body.grade;

//now to save it
marks.save((err,doc)=>{
    if(!err){
        res.redirect('/insert');
    }
    else{
        res.render("admin/insert",{
            viewTitle : "Insert Marks Correctly",
            admin : req.body
        });
        console.log(err);
    }
});
}


//to export the router
module.exports=router;
//Configure route in server.js