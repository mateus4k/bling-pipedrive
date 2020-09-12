import * as supertest from 'supertest';
import { app } from '../../src/app';

let request;

beforeAll(() => {
  request = supertest(app);
});

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('hi');
  });
});
