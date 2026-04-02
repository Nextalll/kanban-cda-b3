const request = require('supertest');
const app = require('../src/app');
const Tache = require('../src/models/Tache');
const Colonne = require('../src/models/Colonne');
const sequelize = require('../src/models/sequelize');

beforeAll(async () => {
  await sequelize.sync({force:true});
  await Colonne.sync({ force: true });
  await Tache.sync({ force: true });
  await Colonne.create({ intitule: 'A Faire' });
});

afterAll(async () => {
  const sequelize = require('../src/models/Tache').sequelize;
  await sequelize.close();
});

describe('Test API Taches', () => {

  it('GET /api/taches doit renvoyer 200 et un tableau', async () => {
    const res = await request(app).get('/api/taches');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/taches doit ajouter une tâche', async () => {
    const nouvelleTache = {
      nom: 'Test',
      couleur: 'FF0000'
    };

    const res = await request(app)
      .post('/api/taches')
      .send(nouvelleTache);

    expect(res.statusCode).toBe(201);
    expect(res.body.nom).toBe('Test');
  });

});