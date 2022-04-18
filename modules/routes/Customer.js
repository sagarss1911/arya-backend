'use strict';

let express = require("express"),
    router = express.Router(),
    controller = require("../controllers/Customer"),
    fileUploadHelper  = require("../helpers/file_upload"),
    validateAccess = require('../policies/Validate_request_access');


router.post("/add_customer",validateAccess.isValidAdmin,fileUploadHelper.uploadUserProfileImage.fields([{ name: 'pan_card'},{ name: 'aadhar_card'},{ name: 'residential_latest_bill'},{ name: 'property_tax_receipt'}]), controller.addCustomer);



module.exports = router;
