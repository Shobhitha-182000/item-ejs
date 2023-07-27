const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    })
  }).catch(err=> console.log(err));
};

//if i click on detail 
exports.getOneProduct=(req,res,next)=>{
  const prodId=req.params.productId;

  Product.findByPk(prodId)
  .then(product=>{
    res.redirect('shop/product-detail',{
      product:product[0],
      pageTitle:product.title,
    path:'/products'})
  }).catch(err=>console.log(err));
 
  
}

exports.getIndex = (req, res, next) => {
  Product.findAll().then(product=>{
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    })
  }).catch(err=> console.log(err));
 
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
