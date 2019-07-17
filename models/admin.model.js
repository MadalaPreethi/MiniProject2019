//schema of database that is to be entered
const mongoose = require("mongoose");
//Defining Schema of database in "adminSchema"
var adminSchema = new mongoose.Schema({
fullname:{
    type : String,
    required :"Full name is required"
},
email:{
    type :String
},
mobile:{
    type : String
},
password:{
    type :String
}
});

//CUSTOM VALIDATION FOR FULLNAME FIELD
adminSchema.path('fullname').validate((val)=>{
    nameRegex=/^[a-zA-Z]+$/;
    return nameRegex.test(val);
},'Invalid name');


//CUSTOM VALIDATION FOR EMAIL FIELD
adminSchema.path('email').validate((val)=>{
    emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
},"Invalid Email");

//CUSTOM VALIDATION FOR MOBILE NO
adminSchema.path('mobile').validate((val)=>{
    mobileRegex= /^\d{10}$/;
    return mobileRegex.test(val);
},"Invalid mobile no");

//CUSTOM VALIDATION FOR PASSWORD
adminSchema.path('password').validate((val)=>{
    passRegex=  /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    //should contain at least one digit
    //should contain at least one lower case   
     //should contain at least one upper case
    //should contain at least 8 from the mentioned characters
    return passRegex.test(val);
},"Invalid password");

//Registering the schema into mongoose
module.exports=mongoose.model("Miniadmin",adminSchema);
//Here "Miniadmin" is the name given to schema