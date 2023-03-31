import { describe, test, expect, vi } from 'vitest';
import { reasonsService } from './reasons.service.js';

vi.mock('fs', () => ({
  default: () => ({
    readFileSync: () => {},
    writeFileSync: () => {}
  })
}));

describe('Reasons service', () => {
  test('getAllReasons should return an array of reasons', async () => {
    const reasons = await reasonsService.getAllReasons();
    expect(Array.isArray(reasons)).toBe(true);
  });

  test('getReasonByIndex should return a reason', async () => {
    const reason = await reasonsService.getReasonByIndex(0);
    expect(typeof reason).toBe('string');
  });

  test('pushReason should add a reason', async () => {
    const reason = 'test reason';
    await reasonsService.pushReason(reason);
    
    const reasons = await reasonsService.getAllReasons();
    expect(reasons[reasons.length - 1]).toBe(reason);
  });
});