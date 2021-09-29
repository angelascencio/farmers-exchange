const sequelize = require('../config/connection');

const Category =  require('../models/category');
const Product = require('../models/product');
const User = require("../models/user")

const categorySeedData = require('./catagorySeedData.json');
const productSeedData = require('./productSeedData.json');
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {

  await sequelize.sync({ force: true});
  await Category.bulkCreate(categorySeedData);
  await Product.bulkCreate(productSeedData);
  await User.bulkCreate(userSeedData)
  
  process.exit(0);

};

seedDatabase();
