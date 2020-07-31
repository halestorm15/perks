'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class points extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.association = this.belongsTo(models.User);
      this.association = this.belongsTo(models.Company);
    }
  };
  points.init({
    UserId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'points',
  });
  return points;
};