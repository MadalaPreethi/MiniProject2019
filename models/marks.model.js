//schema of database that is to be entered
const mongoose = require("mongoose");
//Defining Schema of database in "adminSchema"
var markSchema= new mongoose.Schema({
    rollno:{
        type :String
    },
    examid:{
        type : String
    },
    subject:{
        type : String 
    },
    point:{
        type : Number
    },
    grade:{
        type : String
    }
});

//Registering the schema into mongoose
module.exports=mongoose.model("Marksrecord",markSchema);
//Here "Marksrecord" is the name given to schema