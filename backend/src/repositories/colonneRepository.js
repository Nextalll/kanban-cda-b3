const { Colonne } = require('backend/src/models');

exports.findAll = () => Colonne.findAll();
exports.create = (data) => Colonne.create(data);