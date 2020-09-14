import * as supertest from 'supertest';
import { app } from '../config/app';

describe('CORS Middleware', () => {
  it('should enable CORS', async () => {
    app.get('/cors', (_request, response) => {
      response.send('');
    });

    const response = await supertest(app).get('/cors');

    const headers = [
      'access-control-allow-origin',
      'access-control-allow-methods',
      'access-control-allow-headers',
    ];

    headers.forEach((header) => {
      expect(response.headers[header]).toBe('*');
    });
  });
});
