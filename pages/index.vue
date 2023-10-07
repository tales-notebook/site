<script setup lang="ts">

definePageMeta({
  layout: 'empty'
})

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

      <div class="text-center py-4 text-sm">
        contact@tales-notebook.com
      </div>

  </tl-app>
</template>
