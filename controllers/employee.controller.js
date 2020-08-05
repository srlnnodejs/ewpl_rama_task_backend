const httpStatus = require('http-status')
const { Op } = require("sequelize");
const models = require('../models/index');
const saltRounds = 10;
const async = require('async')
const express=require("express");
const router=express.Router();
const config = require("../config/config.json")
//new employee
exports.newBooking=async(req,res,next)=>{
    const newEmployee = req.body;
    await models.employee.create({
        uuid: newEmployee.uuid,
        firstName: newEmployee.firstName,
        lastname: newEmployee.lastname,
        dateofbirth: newEmployee.dateofbirth,
        designaiton:newEmployee.designaiton,
        email: newEmployee.email,
        mobile:newEmployee.mobile,
        address: newEmployee.address,
        city:newEmployee.city
            }).then(function(resolved){
            console.log("New Employee Created in the Database");
            res.status(httpStatus.CREATED)
            .json({ error: false, type : 'success', result :resolved}).end();
           }).catch(function(err) {
            res.status(httpStatus.NOT_ACCEPTABLE)
          .json({ error: true, type : 'failed', result :err}).end();
        });}
//list of employees