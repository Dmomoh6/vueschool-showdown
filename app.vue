<template>
  <div>
    <Navigation />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
// Define Open Graph image component for SEO
defineOgImageComponent("NuxtSEO", {
  title: "VueSchool - Frontend Showdown",
  description: `Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework`,
  theme: "#212435",
  colorMode: "dark",
});

useSeoMeta({
  title: "VueSchool - Frontend Showdown",
  ogTitle: "VueSchool - Frontend Showdown",
  description:
    "Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework",
  ogDescription:
    "Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework",
  ogImage:
    "https://vueschool.io/img/logo/vueschool_logo_multicolor_negative.svg",
  twitterCard: "vueschool_logo",
});
</script>
