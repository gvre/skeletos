import request from 'supertest';
import { app } from '../app';

describe('Health routes', () => {
  it('returns healthy status with commit and version', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      datetime: expect.any(String),
      status: 'healthy',
      hostname: expect.any(String),
      commit: expect.any(String),
      version: expect.any(String),
    });
  });
});
