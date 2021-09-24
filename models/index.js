// import models
const Product = require('./Product');
const Category = require('./Category');
const Listing = require('./Tag');
const Through = require('./ProductTag');
const { hasMany } = require('./Category');

// Products belongsTo Category
Product.belongsTo( Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products
Category.hasMany( Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Listing (through Through)
Product.belongsToMany( Category, {
  through: Product,
  foreignKey: 'product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
