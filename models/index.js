// import models
const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');

// Products belongsTo Category
Product.belongsTo( Category, {
  foreignKey: 'category_id',
})

// Categories have many Products
Category.hasMany( Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Listing (through Through)
Product.belongsTo( User, {
  foreignKey: 'user_id',
})

User.hasMany( Product, {
  foreignKey: 'user_id'
})

module.exports = {
  Product,
  Category,
  User
};
