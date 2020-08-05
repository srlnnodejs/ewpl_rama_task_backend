var createError = require('http-errors');//https
var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');
const bodyParser =  require('body-parser');
const cors = require('cors');
var usersRouter = require('./routes/user');
var productRouter=require("./routes/product")
var productCostRouter=require("./routes/productcost");
var bookingRouter=require("./routes/booking")
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', usersRouter);
app.use("/product",productRouter)
app.use("/product_cost",productCostRouter)
app.use("/booking",bookingRouter)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen("3333",function(){
    console.log("server listinign portn no 3333")
})
