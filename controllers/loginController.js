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
    res.render("login/loginUser",{
        viewTitle :"Login"
    });
});
 
//checking the user
router.post('/',(req,res)=>{
    var fullnm =req.body.lfn;
    var email =req.body.lemail;
    var pasw = req.body.lpass;

    Admin.findOne({fullname : fullnm,email : email,password : pasw},(err,data)=>{
        if(err){
            console.log(err)
        }
        if(!data){
         console.log(data)
        }
        if(data){
           console.log(user)
        }

    });
});
//to export the router
module.exports=router;
//Configure route in server.js