const { Model, DataTypes } = require("sequelize");

const sequelize = require("../Assignment-13/config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
