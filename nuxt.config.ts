// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  nitro: {
    prerender: {
      routes: ["/"],
      // ignore: ["/blog", "/blog/**"],
    },
  },

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
    preconnect: true,
  },

  runtimeConfig: {
    googleSafeBrowsingApiKey: process.env.GOOGLE_SAFE_BROWSING_API_KEY || "",
  },
});
