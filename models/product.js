const  db=require('../util/database')
 

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    
  }

  static fetchAll(cb) {
    db.execute('SELECT * FROM PRODUCTS');
  }

  static findById(id,cb){
    
  }
};
