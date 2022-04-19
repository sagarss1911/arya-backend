'use strict';


let helper = require("../helpers/helpers"),
    md5 = require('md5'),
    CustomerModel = require("../models/Customer"),
    fs = require('fs'),
    util = require('util'),
    unlinkFile = util.promisify(fs.unlink),
    BadRequestError = require('../errors/badRequestError'),
    s3Helper = require('../helpers/awsS3Helper');
const { v4: uuidv4 } = require('uuid');

let addCustomer = async (adminid, req) => {
    let body = req.body;
    if (helper.undefinedOrNull(body)) {
        throw new BadRequestError(req.t("body_empty"));
    }
    let updatedData = {}
    let optionalFiled = ['name', 'address', 'birthdate', 'mobile_no', 'email', 'education', 'marital_status', 'spouse_name', 'mother_name', 'notes','experience','office_address'];
    optionalFiled.forEach(x => {
        updatedData[x] = body[x]
    });

    if (req.files.pan_card && req.files.pan_card.length > 0) {
       const result = await s3Helper.uploadFile(req.files.pan_card[0])               
        updatedData.pan_card = result.Location
        updatedData.pan_card_bucket_key = result.Key
    }
    if (req.files.aadhar_card && req.files.aadhar_card.length > 0) {
        const result = await s3Helper.uploadFile(req.files.aadhar_card[0])               
        updatedData.aadhar_card = result.Location
        updatedData.aadhar_card_bucket_key = result.Key
    }
    if (req.files.residential_latest_bill && req.files.residential_latest_bill.length > 0) {
        const result = await s3Helper.uploadFile(req.files.residential_latest_bill[0])               
        updatedData.residential_latest_bill = result.Location
        updatedData.residential_latest_bill_bucket_key = result.Key
    }
    if (req.files.property_tax_receipt && req.files.property_tax_receipt.length > 0) {
        const result = await s3Helper.uploadFile(req.files.property_tax_receipt[0])               
        updatedData.property_tax_receipt = result.Location
        updatedData.property_tax_receipt_bucket_key = result.Key
    }
    if (req.files.passport_photo && req.files.passport_photo.length > 0) {
        const result = await s3Helper.uploadFile(req.files.passport_photo[0])               
        updatedData.passport_photo = result.Location
        updatedData.passport_photo_bucket_key = result.Key
    }
    await CustomerModel.create(updatedData);
    return true

}

let getCustomer = async (adminid, req) => {
    let body = req.body;    
    let limit = (body.limit) ? parseInt(body.limit) : 10;
    let page = body.page || 1;
    let offset = (page - 1) * limit;
    let findData = {}
    
        if (body.searchtext) {
                findData["$or"] = [
                    {name: {$like: '%' + body.searchtext + '%'}},
                    {address: {$like: '%' + body.searchtext + '%'}},
                    {office_address: {$like: '%' + body.searchtext + '%'}},
                    {birthdate: {$like: '%' + body.searchtext + '%'}},
                    {mobile_no: {$like: '%' + body.searchtext + '%'}},
                    {email: {$like: '%' + body.searchtext + '%'}},
                    {education: {$like: '%' + body.searchtext + '%'}},
                    {experience: {$like: '%' + body.searchtext + '%'}},
                    {marital_status: {$like: '%' + body.searchtext + '%'}},
                    {spouse_name: {$like: '%' + body.searchtext + '%'}},
                    {mother_name: {$like: '%' + body.searchtext + '%'}},
                    {notes: {$like: '%' + body.searchtext + '%'}},
                    {pan_card: {$like: '%' + body.searchtext + '%'}},
                ]
        }
    
    let allCustomer = await CustomerModel.findAll({
        where: findData,
        limit,
        offset,
        order: [['id', 'DESC']],
        raw: true
    });
 
    let allCustomerTotal = await CustomerModel.count({ where: findData, raw: true});
    let _result = { total_count: 0 };
    _result.slides = allCustomer;
    _result.total_count = allCustomerTotal;
    return _result;

}


module.exports = {
    addCustomer: addCustomer,
    getCustomer:getCustomer

};
