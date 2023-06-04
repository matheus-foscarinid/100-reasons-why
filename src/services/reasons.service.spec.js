import { describe, test, expect } from 'vitest';
import { reasonsService } from './reasons.service.js';

describe('Reasons service', () => {
  test('getAllReasons should return an array of reasons', () => {
    const reasons = reasonsService.getAllReasons();
    expect(Array.isArray(reasons)).toBe(true);
  });

  test('getReasonByIndex should return a reason', () => {
    const jsonMock = [{ id: 1, reason: 'Test reason' }];
    reasonsService.getAllReasons = () => jsonMock;

    const reason = reasonsService.getReasonByIndex(0);

    expect(reason).toBe(jsonMock[0]);
  });
});