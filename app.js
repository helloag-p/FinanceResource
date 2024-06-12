const express=require('express');
const app=express();
const path=require('path');
const { connectToMongoDB } = require("./connection");
const cookieParser = require("cookie-parser");
// const signUp = require("./routes/signUp");
// const login = require("./routes/login");

// const afterlogin = require("./routes/afterlogin");
const { restrictToLoggedinUserOnly, checkAuth} = require("./middleware/foraccessingafterloginpage");
connectToMongoDB("mongodb+srv://parvagarwal04:zxcvbnm12Z@financecluster.zmted8r.mongodb.net/").then(() =>
    console.log("MongoDb connected")
);
app.use(cookieParser());

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    res.render("signup");
})
const { handleLogin } = require("./controllers/login");
const { handleSignUp } = require("./controllers/signedup");

app.post("/signuped", handleSignUp);
// app.use("/",signUp );
// app.use("/user",login);
// app.use("/user/afterloginpage",restrictToLoggedinUserOnly,afterlogin);




app.get("/user/login", async (req, res) => {
  res.render("login");
});

app.post("/user/logged", handleLogin);
app.get("/user/afterloginpage",restrictToLoggedinUserOnly, async (req, res) => {

    res.render("afterloginpage");
});
app.get('/course',function(req,res){
    res.render("course");
})
app.get('/contact1',function(req,res){
    res.render("contact1");
})
app.get('/features1',function(req,res){
    res.render("features1");
})
app.get('/gridproject',function(req,res){
    res.render("gridproject");
})
app.get('/keyproblems',function(req,res){
    res.render("keyproblems");
})
app.get('/knowledge',function(req,res){
    res.render("knowledge");
})
app.get('/pricing',function(req,res){
    res.render("pricing");
})
app.get('/sip_calculator',function(req,res){
    res.render("sip_calculator");
})

app.listen(3020);
