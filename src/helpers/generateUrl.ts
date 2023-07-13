import type { AstroGlobal } from 'astro';

export function generateUrl(pathname: string, { site }: AstroGlobal) {
  if (!site) {
    throw new Error('Site config option has to be defined.');
  }

  let preparedPathname = pathname;

  if (pathname.startsWith('/')) {
    preparedPathname = preparedPathname.substring(1);
  }

  return `${site}${preparedPathname}`;
}
