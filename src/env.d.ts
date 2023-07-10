/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MAIL_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
