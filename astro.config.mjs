import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      devSourcemap: true
    }
  },
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    compress({
      css: true,
      html: false,
      img: true,
      js: true,
      svg: true
    })
  ]
});