const express = require("express");
const offer = express.Router();
const{
    getOffer,
    postoffer,
    updateoffer,
    updatestatusoffer
} = require("../../Contoller/AdminController/offer");

offer.get("/viewoffer",getOffer);
offer.post("/insertoffer", postoffer);
offer.put("/updateoffer/:offercode",  updateoffer);
offer.patch("/updatestatusoffer",  updatestatusoffer);

module.exports = {offer};