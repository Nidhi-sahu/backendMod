const express = require("express");
const assignRole= express.Router();
const{
    postassignRole,
    getassignRole,
    updateassignRole,
    joinassignroles,
    deleteassignRole 
} = require("../../Contoller/AdminController/assignrole");

assignRole.post("/assignrole",postassignRole);
assignRole.get("/assignviewrole",getassignRole);
assignRole.put("/assignupdaterole/:id",updateassignRole);
assignRole.get("/assignjoinrole", joinassignroles);
assignRole.delete("/assigndeleterole/:id",deleteassignRole);


module.exports = {assignRole};