const express = require('express');
const app = express();
app.use(express.json());

const tacheRoutes = require('./routes/tacheRoutes');
app.use('/api/taches', tacheRoutes);

module.exports = app;