const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('retourne un message de bienvenue', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello depuis le backend !');
  });
});

describe('GET /api/status', () => {
  it('retourne un statut OK', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});
