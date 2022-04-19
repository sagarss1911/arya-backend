'use strict';
let sequelize_mysql = require("../helpers/sequelize-mysql");
let Sequelize = require("sequelize");

module.exports = sequelize_mysql.define("customer",
    {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,            
        },
        address: {
            type: Sequelize.STRING,
        },
        office_address: {
            type: Sequelize.STRING,          
        },
        birthdate: {
            type: Sequelize.STRING, 
        },
        mobile_no: {
            type: Sequelize.STRING,            
        },
        email: {
            type: Sequelize.STRING,
          
        },
        education: {
            type: Sequelize.STRING, 
        },
        experience: {
            type: Sequelize.STRING, 
        },
        marital_status: {
            type: Sequelize.ENUM,
            values: ['married', 'unmarried', 'divorced', 'widowed'],
        },
        spouse_name: {
            type: Sequelize.STRING,            
        },
        mother_name: {
            type: Sequelize.STRING, 
        },
        notes: {
            type: Sequelize.STRING,            
        },
        passport_photo: {
            type: Sequelize.STRING,
        },
        pan_card: {
            type: Sequelize.STRING, 
        },
        aadhar_card: {
            type: Sequelize.STRING, 
        },
        residential_latest_bill: {
            type: Sequelize.STRING, 
        },
        property_tax_receipt: {
            type: Sequelize.STRING, 
        },
        passport_photo: {
            type: Sequelize.STRING,
        },
        pan_card_bucket_key: {
            type: Sequelize.STRING, 
        },
        aadhar_card_bucket_key: {
            type: Sequelize.STRING, 
        },
        residential_latest_bill_bucket_key: {
            type: Sequelize.STRING, 
        },
        property_tax_receipt_bucket_key: {
            type: Sequelize.STRING, 
        },        
        passport_photo_bucket_key: {
            type: Sequelize.STRING, 
        },        
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: ()=>new Date()
        },
        updatedAt: {
            type: Sequelize.DATE,          
            defaultValue: ()=>new Date()
        },
    },
    {
        freezeTableName: true,
        tableName: 'customer'
    }
);


