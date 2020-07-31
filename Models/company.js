'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.association = this.belongsToMany(models.User, {
        through: 'points',
        foreignKey: 'CompanyId',
        otherKey: 'UserId'
      });
    }
  };
  Company.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};