import { describe, it, expect } from 'vitest';
import { generateUrl } from './generateUrl';

const baseUrl = 'http://localhost:4321';

describe('generateUrl', () => {
  it.each([
    { input: '/test/url', output: `${baseUrl}/test/url` },
    { input: 'test/url', output: `${baseUrl}/test/url` },
  ])('should return properly generated url', ({ input, output }) => {
    const url = generateUrl(input, new URL(baseUrl));

    expect(url).toEqual(output);
  });

  it('should throw an error when site is empty', () => {
    expect(() => {
      generateUrl('/test/url');
    }).toThrowError('Site config option has to be defined.');
  });
});
