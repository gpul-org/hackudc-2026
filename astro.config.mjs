// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hackudc.gpul.org",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    "/terminos": "/es/terminos",
    "/conducta": "/es/conducta",
    "/privacidad": "/es/privacidad",
    "/informacion": "/es/informacion",
  },
});
