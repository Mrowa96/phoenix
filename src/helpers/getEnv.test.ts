import { describe, beforeEach, it, expect } from 'vitest';
import { getEnv } from './getEnv';

describe('getEnv', () => {
  beforeEach(() => {
    delete process.env.TEST;
  });

  it('should return string', () => {
    process.env.TEST = 'TEST';

    expect(getEnv('TEST')).toEqual('TEST');
  });

  it('should throw MissingEnvError when env is undefined', () => {
    expect(() => {
      getEnv('TEST');
    }).toThrowError('Missing env: TEST');
  });

  it('should not throw any error when env is undefined', () => {
    expect(getEnv('TEST', { throwOnUndefined: false })).toBeUndefined();
  });

  it('should return parsed number', () => {
    process.env.TEST = '666';

    expect(getEnv('TEST', { asNumber: true })).toEqual(666);
  });

  it('should throw ExpectEnvAsNumberError when provided number is NaN', () => {
    process.env.TEST = 'xxx';

    expect(() => {
      getEnv('TEST', { asNumber: true });
    }).toThrowError('Env: TEST should be a number');
  });

  it('should not throw any error when env is undefined', () => {
    expect(getEnv('TEST', { asNumber: true, throwOnUndefined: false })).toBeUndefined();
  });
});
