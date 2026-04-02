const express = require('express');
const router = express.Router();
const Tache = require('../models/Tache');
const Colonne = require('../models/Colonne');

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', async (req, res) => {
  try {
    const colonne = await Colonne.findOne({ where: { intitule: 'A Faire' } });
    if (!colonne) {
      return res.status(400).json({ error: 'Colonne A Faire inexistante' });
    }

    const tache = await Tache.create({
      nom: req.body.nom,
      couleur: req.body.couleur,
      colonneId: colonne.id
    });

    res.status(201).json(tache);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;