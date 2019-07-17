const mongoose = require("mongoose");//requesting mongoose service
//requesting express
const express = require("express");
require("./admin.model");
require("./marks.model");


//Connecting databases in mongodb for admins & marks
mongoose.connect("mongodb://localhost:27017/MiniProjAdminDB",{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("Connected To database");
    }
    else{
        console.log("Error in connection to database");
    }
});
