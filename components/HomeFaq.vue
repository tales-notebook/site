<script setup lang="ts">

const { data } = await useAsyncData('faq', () => queryContent('/faq').find())

const docs = computed(() => data.value ?? [])

</script>
<template>
    <div class="min-h-screen flex items-center">
        <tl-container>
            <h2 class="text-4xl lg:text-6xl font-bold mb-10">FAQ</h2>

            <div class="flex flex-col gap-y-4">

                <div
                    v-for="(doc, index) in docs"
                    :key="doc._path"
                >
    
                    <h3 class="font-bold text-xl mb-2">
                        {{ index + 1 }} - {{ doc.title }}
                    </h3>
        
                    <ContentDoc :path="doc._path" />
                </div>
            </div>

        </tl-container>
    </div>
</template>