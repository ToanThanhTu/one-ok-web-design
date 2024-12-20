// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@mui/icons-material": "@mui/icons-material/esm",
      },
    },
    ssr: {
      noExternal: /@mui\/.*?/,
    },
  },
});
