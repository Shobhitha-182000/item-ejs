const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

//adding product
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageurl: imageUrl,
    description: description,
  }).then((result) => {
    console.log("successfully inserted");
  }).catch(err=> console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    }
  )
  .catch(error=>console.log(error));
  
};
