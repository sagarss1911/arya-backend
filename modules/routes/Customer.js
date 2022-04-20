'use strict';

let express = require("express"),
    router = express.Router(),
    controller = require("../controllers/Customer"),
    fileUploadHelper  = require("../helpers/file_upload"),
    validateAccess = require('../policies/Validate_request_access');


router.post("/add_customer",validateAccess.isValidAdmin,fileUploadHelper.uploadUserProfileImage.fields([{ name: 'pan_card'},{ name: 'aadhar_card'},{ name: 'residential_latest_bill'},{ name: 'property_tax_receipt'},{ name: 'passport_photo'}]), controller.addCustomer);
router.put("/update_customer/:id",validateAccess.isValidAdmin,fileUploadHelper.uploadUserProfileImage.fields([{ name: 'pan_card'},{ name: 'aadhar_card'},{ name: 'residential_latest_bill'},{ name: 'property_tax_receipt'},{ name: 'passport_photo'}]), controller.updateCustomer);
router.delete("/delete_customer/:id",validateAccess.isValidAdmin, controller.deleteCustomer);
router.post("/get_customer",validateAccess.isValidAdmin, controller.getCustomer);
router.get("/get_single_customer/:id",validateAccess.isValidAdmin, controller.getSingleCustomer);



module.exports = router;
