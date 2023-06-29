/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly MAILER_HOST: string;
  readonly MAILER_PORT: string;
  readonly MAILER_USER: string;
  readonly MAILER_PASSWORD: string;
  readonly MAILER_RECEIVER_MAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
