<script setup lang="ts">
const route = useRoute();

const slug = computed(() => String(route.params.slug));

const response = await useContentTranslation("faq", slug.value).find();

const post = response[0];

</script>

<template>
  <ContentDoc v-if="post" :path="post._path" />
</template>