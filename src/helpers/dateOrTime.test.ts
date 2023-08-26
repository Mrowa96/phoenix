import { describe, it, expect } from 'vitest';
import { getFormattedDateTime } from './dateOrTime';

describe('dateOrTime', () => {
  describe('getFormattedDateTime', () => {
    it('should return formatted date', () => {
      expect(getFormattedDateTime(new Date('2023-08-26T15:13:19Z'))).toEqual('26.08.2023, 15:13');
    });
  });
});
