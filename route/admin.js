const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const resource = require('../util/path');
const router = express.Router();
const addcontroller = require('../controller/add')
const products = [];

router.get("/add-product", (req, res, next) => {
res.render('add-product', {pageTitle:"Add Product", activee:'activeadd'})
  //   next();
});
router.post('/add-product',addcontroller.adding)
exports.routes= router;
