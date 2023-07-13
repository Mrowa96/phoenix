import { describe, it, expect } from 'vitest';
import { generateUrl } from './generateUrl';
import type { AstroGlobal } from 'astro';

const baseUrl = 'http://localhost:3000';

describe('generateUrl', () => {
  it.each([
    { input: '/test/url', output: `${baseUrl}/test/url` },
    { input: 'test/url', output: `${baseUrl}/test/url` },
  ])('should return properly generated url', ({ input, output }) => {
    const url = generateUrl(input, { site: new URL(baseUrl) } as AstroGlobal);

    expect(url).toEqual(output);
  });

  it('should throw an error when site is empty', () => {
    expect(() => {
      generateUrl('/test/url', { site: undefined } as AstroGlobal);
    }).toThrowError('Site config option has to be defined.');
  });
});
