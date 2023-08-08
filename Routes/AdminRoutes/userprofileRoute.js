const express = require("express");
const userProfile = express.Router();
const{
    getuserProfile,
    postuserProfile,
    updateuserProfile,
    userProfilee
   
}= require("../../Contoller/AdminController/userprofile");
userProfile.get("/viewprofile",getuserProfile);
userProfile.post("/insertprofile", postuserProfile);
userProfile.put("/updateprofile/:id", updateuserProfile);
userProfile.patch("/updatephoto/:id", userProfilee );

module.exports = {userProfile};