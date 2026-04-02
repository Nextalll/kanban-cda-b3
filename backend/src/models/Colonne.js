const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Colonne = sequelize.define('Colonne', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    intitule: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = Colonne;