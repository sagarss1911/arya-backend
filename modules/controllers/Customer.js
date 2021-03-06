/**
 * @swagger
 * resourcePath: /Customer
 * description: All Customer related api
 */
 'use strict';

 let customerManager = require('../manager/Customer');
 
 
 /**
  * @swagger
  * /api/v1/customer/add_customer:
  *   post:
  *     summary: add_customer.
  *     tags:
  *      - Customer
  *     parameters :
  *     - name: x-auth-api-key
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: x-auth-token
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string   
  *     requestBody:
  *       required: true
  *       content:
  *         multipart/form-data:
  *           schema:
  *             type: object
  *             properties: 
  *               pan_card:
  *                 type: file 
  *                 paramType: body
  *               passport_photo:
  *                 type: file 
  *                 paramType: body
  *               aadhar_card:
  *                 type: file 
  *                 paramType: body 
  *               residential_latest_bill:
  *                 type: file 
  *                 paramType: body 
  *               property_tax_receipt:
  *                 type: file 
  *                 paramType: body 
  *               name:
  *                 type: string
  *                 example: johm Smith
  *                 paramType: body
  *               address:
  *                 type: string
  *                 example: a-18 h society
  *                 paramType: body 
  *               office_address:
  *                 type: string
  *                 example: a-18 h society
  *                 paramType: body 
  *               birthdate:
  *                 type: string
  *                 example: 19/07/1994
  *                 paramType: body
  *               mobile_no:
  *                 type: string
  *                 example: 9377690348
  *                 paramType: body
  *               email:
  *                 type: string
  *                 example: abc@gmail.com
  *                 paramType: body
  *               education:
  *                 type: string
  *                 example: education
  *                 paramType: body
  *               experience:
  *                 type: string
  *                 example: education
  *                 paramType: body
  *               marital_status:
  *                 type: string
  *                 example: married
  *                 paramType: body
  *               spouse_name:
  *                 type: string
  *                 example: abc wife
  *                 paramType: body
  *               mother_name:
  *                 type: string
  *                 example: abc ben
  *                 paramType: body
  *               notes:
  *                 type: string
  *                 example: sample notes
  *                 paramType: body 
  *     responses:
  *       200:
  *         description: object
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 data:
  *                   type: object
  *       400:
  *         description: error in request processing
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 message:
  *                   type: string
  *                 status:
  *                   type: integer
  *                   example: 400
 */
 let addCustomer = (req, res, next) => {
     let adminid = req.admin ? req.admin.adminid : null;
 
     return customerManager
         .addCustomer(adminid, req)
         .then(data => {
             let result = {
                 status: 200,
                 data: data
             }
             return res.json(result);
         })
         .catch(next);
 }
 
/**
  * @swagger
  * /api/v1/customer/get_customer:
  *   post:
  *     summary: get_customer.
  *     tags:
  *      - Customer
  *     parameters :
  *     - name: x-auth-api-key
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: x-auth-token
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string   
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:   
  *               page:
  *                 type: integer
  *                 example: 1
  *                 paramType: body
  *               limit:
  *                 type: integer
  *                 example: 10
  *                 paramType: body 
  *               searchtext:
  *                 type: string
  *                 example: a-18 h society
  *                 paramType: body   
  *     responses:
  *       200:
  *         description: object
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 data:
  *                   type: object
  *       400:
  *         description: error in request processing
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 message:
  *                   type: string
  *                 status:
  *                   type: integer
  *                   example: 400
 */
 let getCustomer = (req, res, next) => {
    let adminid = req.admin ? req.admin.adminid : null;

    return customerManager
        .getCustomer(adminid, req)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);
        })
        .catch(next);
}
 /**
  * @swagger
  * /api/v1/customer/update_customer:
  *   post:
  *     summary: update_customer.
  *     tags:
  *      - Customer
  *     parameters :
  *     - name: x-auth-api-key
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: x-auth-token
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string
  *     - name: id
  *       in: path   
  *       description: id of the customer
  *       required: true
  *       type: integer      
  *     requestBody:
  *       required: true
  *       content:
  *         multipart/form-data:
  *           schema:
  *             type: object
  *             properties: 
  *               pan_card:
  *                 type: file 
  *                 paramType: body
  *               passport_photo:
  *                 type: file 
  *                 paramType: body
  *               aadhar_card:
  *                 type: file 
  *                 paramType: body 
  *               residential_latest_bill:
  *                 type: file 
  *                 paramType: body 
  *               property_tax_receipt:
  *                 type: file 
  *                 paramType: body 
  *               name:
  *                 type: string
  *                 example: johm Smith
  *                 paramType: body
  *               address:
  *                 type: string
  *                 example: a-18 h society
  *                 paramType: body 
  *               office_address:
  *                 type: string
  *                 example: a-18 h society
  *                 paramType: body 
  *               birthdate:
  *                 type: string
  *                 example: 19/07/1994
  *                 paramType: body
  *               mobile_no:
  *                 type: string
  *                 example: 9377690348
  *                 paramType: body
  *               email:
  *                 type: string
  *                 example: abc@gmail.com
  *                 paramType: body
  *               education:
  *                 type: string
  *                 example: education
  *                 paramType: body
  *               experience:
  *                 type: string
  *                 example: education
  *                 paramType: body
  *               marital_status:
  *                 type: string
  *                 example: married
  *                 paramType: body
  *               spouse_name:
  *                 type: string
  *                 example: abc wife
  *                 paramType: body
  *               mother_name:
  *                 type: string
  *                 example: abc ben
  *                 paramType: body
  *               notes:
  *                 type: string
  *                 example: sample notes
  *                 paramType: body 
  *     responses:
  *       200:
  *         description: object
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 data:
  *                   type: object
  *       400:
  *         description: error in request processing
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 message:
  *                   type: string
  *                 status:
  *                   type: integer
  *                   example: 400
 */
  let updateCustomer = (req, res, next) => {
    let adminid = req.admin ? req.admin.adminid : null;
    let id = req.params.id
    return customerManager
        .updateCustomer(adminid, req,id)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);
        })
        .catch(next);
}
/**
  * @swagger
  * /api/v1/customer/delete_customer:
  *   delete:
  *     summary: delete_customer.
  *     tags:
  *      - Customer
  *     parameters :
  *     - name: x-auth-api-key
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: x-auth-token
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: id
  *       in: path   
  *       description: id of the customer
  *       required: true
  *       type: integer      
  *     responses:
  *       200:
  *         description: object
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 data:
  *                   type: object
  *       400:
  *         description: error in request processing
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 message:
  *                   type: string
  *                 status:
  *                   type: integer
  *                   example: 400
 */
 let deleteCustomer = (req, res, next) => {
    let adminid = req.admin ? req.admin.adminid : null;
    let id = req.params.id
    return customerManager
        .deleteCustomer(adminid, req,id)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);
        })
        .catch(next);
}
/**
  * @swagger
  * /api/v1/customer/get_single_customer:
  *   get:
  *     summary: get_single_customer.
  *     tags:
  *      - Customer
  *     parameters :
  *     - name: x-auth-api-key
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: x-auth-token
  *       in: header   
  *       description: an authorization header
  *       required: true
  *       type: string 
  *     - name: id
  *       in: path   
  *       description: id of the customer
  *       required: true
  *       type: integer      
  *     responses:
  *       200:
  *         description: object
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 data:
  *                   type: object
  *       400:
  *         description: error in request processing
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 message:
  *                   type: string
  *                 status:
  *                   type: integer
  *                   example: 400
 */
 let getSingleCustomer = (req, res, next) => {
    let adminid = req.admin ? req.admin.adminid : null;
    let id = req.params.id
    return customerManager
        .getSingleCustomer(adminid, req,id)
        .then(data => {
            let result = {
                status: 200,
                data: data
            }
            return res.json(result);
        })
        .catch(next);
}
 module.exports = {     
     addCustomer: addCustomer,
     updateCustomer: updateCustomer,
     deleteCustomer:deleteCustomer,
     getCustomer:getCustomer,
     getSingleCustomer:getSingleCustomer 
 };