<script setup lang="ts">
const route = useRoute();

const slug = computed(() => String(route.params.slug));

const response = await useContentTranslation("faq", slug.value).find();

const doc = response[0];

</script>

<template>
  <div v-if="doc">

    <div class="mb-4">
      <h2 class="font-bold text-2xl">
        {{ doc.title }}
      </h2>
    </div>

    <div>
      <ContentDoc  :path="doc._path" />
    </div>
  </div>
</template>