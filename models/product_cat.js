const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product_user extends Model {}

Product_user.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
    model: 'product',
    key: 'id'
    }
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    }
  },

},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product_cat',
  }
  );

module.exports = Through;
