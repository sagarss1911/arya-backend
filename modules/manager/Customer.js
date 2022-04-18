'use strict';


let helper = require("../helpers/helpers"),
    md5 = require('md5'),
    CustomerModel = require("../models/Customer"),
    fs = require('fs'),
    util = require('util'),
    unlinkFile = util.promisify(fs.unlink),
    BadRequestError = require('../errors/badRequestError');
    const { v4: uuidv4 } = require('uuid');

let addCustomer = async (adminid, req) => {
    let body = req.body;
    if (helper.undefinedOrNull(body)) {
        throw new BadRequestError(req.t("body_empty"));
    }
    let updatedData = {}
    let optionalFiled = ['name', 'address', 'birthdate', 'mobile_no', 'email', 'education', 'marital_status', 'spouse_name', 'mother_name', 'notes'];
    optionalFiled.forEach(x => {
        updatedData[x] = body[x]
    });
    
    if (req.files.pan_card && req.files.pan_card.length > 0) {
     //   const result = await s3Helper.uploadFile(req.files.pan_card[0])
     updatedData["pan_card"] = req.files.pan_card[0].filename     
    }
    if (req.files.aadhar_card && req.files.aadhar_card.length > 0) {
        //   const result = await s3Helper.uploadFile(req.files.aadhar_card[0])
        updatedData["aadhar_card"] = req.files.aadhar_card[0].filename     
       }
       if (req.files.residential_latest_bill && req.files.residential_latest_bill.length > 0) {
        //   const result = await s3Helper.uploadFile(req.files.residential_latest_bill[0])
        updatedData["residential_latest_bill"] = req.files.residential_latest_bill[0].filename     
       }
       if (req.files.property_tax_receipt && req.files.property_tax_receipt.length > 0) {
        //   const result = await s3Helper.uploadFile(req.files.property_tax_receipt[0])
        updatedData["property_tax_receipt"] = req.files.property_tax_receipt[0].filename     
       }
    await CustomerModel.create(updatedData);
       return true
    
}

module.exports = {    
    addCustomer: addCustomer
    
};
