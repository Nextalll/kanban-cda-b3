const { Tache, Colonne } = require('backend/src/models');

exports.findAll = () => Tache.findAll({ include: Colonne });
exports.create = (data) => Tache.create(data);