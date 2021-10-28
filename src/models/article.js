'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    b_title: DataTypes.STRING,
    b_image: DataTypes.STRING,
    b_body: DataTypes.STRING,
    b_conclusion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};