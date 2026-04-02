require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const tacheRoutes = require('./routes/tacheRoutes');

app.use(express.json());
app.use('/api/taches', tacheRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api/taches', (req, res) => {
  res.json([
    { id: 1, nom: "Tâche 1", couleur: "FF0000" },
    { id: 2, nom: "Tâche 2", couleur: "00FF00" }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app; 