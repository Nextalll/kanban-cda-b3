import helmet from "helmet";
import rateLimit from "express-rate-limit";
const express = require('express');
const app = express();

app.use(express.json());

const tacheRoutes = require('./routes/tacheRoutes');
app.use('/api/taches', tacheRoutes);

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

module.exports = app;