/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_visitsCounter: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}