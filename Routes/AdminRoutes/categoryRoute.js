const express = require("express");
const category= express.Router();
const{
    getCategory ,
    getCategoryName,
    postCategory,
    updateCategory,
    updatecategorystatus
} = require("../../Contoller/AdminController/category")

category.get("/viewcategory", getCategory );
category.post("/viewcategoryname", getCategoryName );
category.post("/addcategory", postCategory );
category.patch("/updatecategory/:category_id", updateCategory );
category.patch("/updatecategorystatus",updatecategorystatus)

module.exports = {category};