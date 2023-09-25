<script setup lang="ts">

useSeoMeta({
  title: 'Tales notebook',
  description: 'A new platform for publishing, translating, and reading mangas & comics',
  ogImage: '/images/og-image.jpg',
  ogTitle: 'Tales notebook',
  ogDescription: 'A new platform for publishing, translating, and reading mangas & comics',
  twitterCard: 'summary_large_image',
})

</script>
<template>
  <tl-app>
      <HomeHero />
      <HomeAbout />
      <HomeNewsletter />
      <HomeFaq />
  </tl-app>
</template>
