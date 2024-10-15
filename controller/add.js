const product = require('../models/product');
const Products = require('../models/product');

exports.adding = (req,res,next)=>{
   const product = new Products( req.body.title);
   product.save()
  res.redirect('/');
  
  
  }
exports.shop =  (req, res, next) => {
  const products = Products.fetchALL(products=>{
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      activee: "activeshop",
    });
  } )

  }