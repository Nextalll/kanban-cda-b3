const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
const Colonne = require('./Colonne');

const Tache = sequelize.define('Tache', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    couleur: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9A-Fa-f]{6}$/
      }
    }
  });

Tache.belongsTo(Colonne);
Colonne.hasMany(Tache);

module.exports = Tache;