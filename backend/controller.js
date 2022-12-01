const expressAsync=require('express-async-handler');

const User=require('./userModel');

const registerUser=expressAsync(async(req,res)=>
{
const {email,password}=req.body;

const UserExists=await User.findOne({email});
if(UserExists){
    res.status(400);
    throw new Error("user aldready exists");
}
const user=await User.create(
    {
        email:email,password:password
    }
);
if(user){
    res.status(201);
    res.json({
        email: user.email,

    })
}
else{
    throw Error("Error has occured");
}



});
const authuser=expressAsync(async(req,res)=>
{
const {email,password}=req.body;


const user=await User.findOne({email});
if(user&&await user.matchPassword(password)){
    res.json({
        email:email,
        success:"Succesfully logged in"
    })}
else {
    res.status(401);
    throw new Error("Invalid Email or Password entered");
  }
}


);
module.exports={registerUser,authuser};
