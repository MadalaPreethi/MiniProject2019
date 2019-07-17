//Main entry point of application where all views ,models are to be requested in order to access
require("./models/db");

//requesting express
const express = require("express");

/* From here in this route we need to return a form in order to insert
or update
for that we use "express-handlebars"
1) 1st add request for path in server.js
*/
const path = require('path');

/*2) then request for Express-Handlebars*/
const exphbs = require('express-handlebars');

var app =express();

//requesting "BODY-PARSER" which is used to read the parameters which we enter in form
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({
    extended : true
}));

//now after aquiring user data in form by "body-parser" converting it to "JSON"
app.use(bodyparser.json());

/*3)Now configure express middleware
     I)Set view directory for application
     */
app.set("views",path.join(__dirname,'/views/'));

//Configure express engine handlebars
app.engine('hbs',exphbs({
    extname : 'hbs',
    defaultLayout : 'mainLayout',
    layoutsDir : __dirname+'/views/layouts/'
}));

app.set('view engine','hbs');
//Configuring "adminController" route 
const adminController = require("./controllers/adminController");

app.listen(7001,()=>{
    console.log("Server started at port 7001");
});

//Now adding route to adminController by which we can access on web
//assigning route using "use" method in express
app.use('/admin',adminController);

//Configuring "marksController" route
const marksController = require("./controllers/marksController");

////Now adding route to marksController by which we can access on web
//assigning route using "use" method in express
app.use('/insert',marksController);

//Configuring "marksController" route
const homeController = require("./controllers/homeController");

////Now adding route to homeController by which we can access on web
//assigning route using "use" method in express
app.use('/home',homeController);

//Configuring "loginController" route
const loginController = require("./controllers/loginController");

//Now adding route to loginController by which we can access on web
//assigning route using "use" method in express
app.use('/login',loginController);
//route to main layout
app.get('/',function(req,res){
    res.render('./layouts/mainLayout.hbs');
});