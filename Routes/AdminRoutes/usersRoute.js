const express = require("express");
const adminRegister = express.Router();
const{
    getadminRegister,
    postadminRegister,
    putadminRegister,
    patchstatusadminRegister,
    patchpwdadminRegister
} = require("../../Contoller/AdminController/users");

/**
 * @swagger
 *  components:
 *      schemas:
 *        users:
 *           type: object
 *           properties:
 *                id:
 *                        type: varchar 
 *                name:
 *                         type: varchar  
 *                password:
 *                         type: varchar
 *                status:
 *                         type: varchar
 *                createon: 
 *                         type: datetime                               
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 
 * /userlist:
 *  get:
 *      summary: This api is used to check whether api is working or not in (users)
 *      tags: [Users]
 *      description: This api is used to check whether api is working or not in (users)
 *      responses:
 *          200:
 *              description: To test Get method
 *              content: 
 *                    application/json:
 *                           schema:
 *                               type: array
 *                               items:
 *                                $ref : '#components/schemas/users'
 */

/** 
 * @swagger
 * /registeruser:
 *  post:
 *      summary: used to insert data into mysql database (users)
 *      tags: [Users]
 *      description: This api is used to insert data into mysql database (users)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 *      responses:
 *          200:
 *              description: Added successfully
 */

/**
 * @swagger
 * /usermodify/{id}:
 *  put:
 *      summary: used to update data into mysql database (user)
 *      tags: [Users]
 *      description: This api is used to update data into mysql database (user)
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: varchar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 *      responses:
 *          200:
 *              description: updated successfully
 *              content:
 *                 application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 */

/**
 * @swagger
 * /userstatus/{id}:
 *  patch:
 *      summary: used to update data into mysql database (user)
 *      tags: [Users]
 *      description: This api is used to update data into mysql database (user)
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: varchar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 *      responses:
 *          200:
 *              description: updated successfully
 *              content:
 *                 application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 */


/**
 * @swagger
 * /userpwd/{id}:
 *  patch:
 *      summary: used to update data into mysql database (user)
 *      tags: [Users]
 *      description: This api is used to update data into mysql database (user)
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: varchar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 *      responses:
 *          200:
 *              description: updated successfully
 *              content:
 *                 application/json:
 *                  schema:
 *                      $ref: '#components/schemas/users'
 */
adminRegister.get("/userlist",getadminRegister);
adminRegister.post("/registeruser",postadminRegister);
adminRegister.put("/usermodify/:id",putadminRegister);
adminRegister.patch("/userstatus",patchstatusadminRegister);
adminRegister.patch("/userpwd/:id",patchpwdadminRegister);

module.exports = {adminRegister};