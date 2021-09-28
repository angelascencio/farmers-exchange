const sequelize = require('../config/connection');

const Category =  require('../models/category');
const Product = require('../models/product');

const categorySeedData = require('./catagorySeedData.json');
const productSeedData = require('./productSeedData.json');
const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true});
  await Category.bulkCreate(categorySeedData);
  await Product.bulkCreate(productSeedData);
  
  process.exit(0);

};

seedDatabase();
