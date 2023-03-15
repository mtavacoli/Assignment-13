const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Assignment-13/config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
