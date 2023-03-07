const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "shoppingCartRow",
    {}, 
    { underscored: true }
  );
};
