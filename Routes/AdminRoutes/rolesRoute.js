const express = require("express");
const adminRole = express.Router();
const{
 getadminRole,
  postadminRole,
  updateadminRole,
  assignRoles,
  userRoles,
  RevokeRoles,
  assignRole,
  removerole
} = require("../../Contoller/AdminController/roles");

/**
 * @swagger
 *  components:
 *      schemas:
 *        role:
 *           type: object
 *           properties:
 *                role_id:
 *                        type: varchar 
 *                rolename:
 *                         type: varchar                                 
 */

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: 
 * /viewrole:
 *  get:
 *      summary: This api is used to check whether api is working or not in (role)
 *      tags: [Role]
 *      description: This api is used to check whether api is working or not in (api)
 *      responses:
 *          200:
 *              description: To test Get method
 *              content: 
 *                    application/json:
 *                           schema:
 *                               type: array
 *                               items:
 *                                $ref : '#components/schemas/role'
 */

/** 
 * @swagger
 * /addrole:
 *  post:
 *      summary: used to insert data into mysql database (ecommerce)
 *      tags: [Role]
 *      description: This api is used to insert data into mysql database (ecommerce)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/role'
 *      responses:
 *          200:
 *              description: Added successfully
 */

/**
 * @swagger
 * /updaterole/{role_id}:
 *  put:
 *      summary: used to update data into mysql database (role)
 *      tags: [Role]
 *      description: This api is used to update data into mysql database (role)
 *      parameters:
 *          - in: path
 *            name: role_id
 *            required: true
 *            description: Numeric id is required
 *            schema:
 *              type: varchar
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/role'
 *      responses:
 *          200:
 *              description: updated successfully
 *              content:
 *                 application/json:
 *                  schema:
 *                      $ref: '#components/schemas/role'
 */
adminRole.get("/viewrole",getadminRole);
adminRole.post("/addrole",postadminRole);
adminRole.put("/updaterole/:role_id",updateadminRole);
adminRole.post('/assignrole',assignRoles)
adminRole.get('/rolesget',userRoles)
adminRole.delete('/deleteassignrole/:id/:roleid',RevokeRoles)
adminRole.get('/getroles',assignRole)
adminRole.delete('/revokerole',removerole)

module.exports = {adminRole};