<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.slug);

const documents = await useContentTranslation('faq').find()

const drawer = ref(false)

</script>
<template>
    <div class="flex h-full relative">

        


        <tl-card max-width="300" height="full" rounded="none" class="hidden md:block">
            <tl-card-content>
                <tl-card-title>
                    <h1>FAQ</h1>
                </tl-card-title>               
            </tl-card-content>

            <tl-list-item
                v-for="document in documents" :key="document.id"
                :to="document._path"
            >
                <h2>{{ document.title }}</h2>
            </tl-list-item>
        </tl-card>

        <div class="p-5 w-full h-full overflow-y-auto">
            <tl-card class="z-20 mb-4 md:hidden">
                <tl-list-item
                    v-for="document in documents" :key="document.id"
                    :to="document._path"
                >
                    <h2>{{ document.title }}</h2>
                </tl-list-item>
            </tl-card>

            <tl-card height="full">
                <div v-if="!slug" class="flex items-center justify-center h-full w-full" >
                    <tl-icon name="mdi:faq" size="80" />
                </div>
    
                <tl-card-content v-else>
                    <nuxt-page  />
                </tl-card-content>
            </tl-card>
        </div>

    </div>
</template>