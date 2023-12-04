/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Extend if needed eg.
  // readonly PARAM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
