const express = require("express");
const subCategory= express.Router();
const{
    getSubcategory,
    postsubCategory,
    updatesubCategory,
}= require("../../Contoller/AdminController/subcategory")

subCategory.get("/viewsubcategory", getSubcategory );
subCategory.post("/insertsubcategory",  postsubCategory);
subCategory.put("/updatesubcategory/:sub_category", updatesubCategory);

module.exports = {subCategory};