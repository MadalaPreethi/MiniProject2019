//This file is used to create a route for displaying "admins" on screen
//requesting express
const express = require("express");


//reqesting mongoose
const mongoose = require('mongoose');

//Now creating a obj to render the view
const Admin = mongoose.model("Miniadmin");

//creating router obj using "Router" method of express
var router = express.Router();
router.get('/',(req,res)=>{
    res.render("admin/addOrEdit",{
        viewTitle : "Insert Administrator"
    });
});

//calling insertRecord function to insert data into db
router.post("/",(req,res)=>{
    insertRecord(req,res);
});

//To insert data into "Mongodb" as a record we create a new function "insertRecord"
function insertRecord(req,res){
var adminss=new Admin();

//now to populate the record from view
adminss.fullname = req.body.fullname;
adminss.email = req.body.email;
adminss.mobile= req.body.mobile;
adminss.password = req.body.password;

//now to save it
adminss.save((err,doc)=>{
if(!err){
    res.redirect('./login');
}
else{
    if(err.fullname == 'ValidationError'){
      handleValidationError(err,req.body);
    }
    res.render("admin/addOrEdit",{
        viewTitle : "Insert User",
        admin : req.body
    });
    console.log(err);
}
});
}

//function to handle "Validation error"
function handleValidationError(err,body){
for(field in err.errors){
    switch(err.errors[field].path){
        //each field in admins form check
        case "fullname":
        body['fullNameError']=err.errors[field].message;
        break;
        case "email":
        body['emailError']=err.errors[field].message;
        break;
        case "mobile":
        body['mobileError']=err.errors[field].message;
        break;
        case "password":
        body['passwordError']=err.errors[field].message;
        break;
        default:
        break;
    }
}
}
 
router.get('/insert',(req,res)=>{
    res.render("admin/insert");
});

//to export the router
module.exports=router;
//Configure route in server.js

