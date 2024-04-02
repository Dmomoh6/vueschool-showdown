// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/sanity",
    "@nuxtjs/seo",
  ],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    useCdn: true,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: "2024-04-01",
  },
  css: ["../assets/css/style.css"],
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],

      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
        },
      ],

      noscript: [{ children: "JavaScript is required" }],
    },
  },
});
