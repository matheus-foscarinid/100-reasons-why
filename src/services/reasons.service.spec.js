import { describe, test, expect } from 'vitest';
import { reasonsService } from './reasons.service.js';

describe('Reasons service', () => {
  test('getAllReasons should return an array of reasons', async () => {
    const reasons = await reasonsService.getAllReasons();
    expect(Array.isArray(reasons)).toBe(true);
  });
});