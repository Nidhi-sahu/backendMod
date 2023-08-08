const express = require("express");
const retailerRegistration = express.Router();

const{
    postRetailer ,
    getretailer,
    getstatusretailer,
    updateretailer,
    updatestatusretailer,
    updatepictureretailer,
    updatepwdretailer
}= require("../ControllerRetailer/retailerRegistration")

retailerRegistration.post("/shopregistration", postRetailer);
retailerRegistration.post("/viewshop",getretailer); 
retailerRegistration.post("/view1shop", getstatusretailer);
retailerRegistration.patch("/updateshop/:retailer_id",updateretailer);
retailerRegistration.patch("/updateshopstatus", updatestatusretailer);
retailerRegistration.patch("/updateshopphoto/:retailer_id", updatepictureretailer);//prblm
retailerRegistration.patch("/updateshoppwd/:retailer_id",updatepwdretailer);

module.exports = {retailerRegistration};                  