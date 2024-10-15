const express = require("express");

const path = require("path");
const shopcontroller = require('../controller/add')
const shop = express.Router();
const admindata = require("./admin");
const resource = require("../util/path");
shop.get("/",shopcontroller.shop);
module.exports = shop;
