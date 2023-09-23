<script lang="ts" setup>

const imageSize = ref({
    // width: 970,
    height: 500,
})

</script>

<template>
    <div class="h-screen w-screen flex items-center justify-center">
      <div class="absolute inset-0">
        <tl-img
          src="/images/home-hero-bg.jpg"
          class="h-full w-full object-cover"
        />
        <div class="bg-gradient-to-b from-transparent to-black absolute inset-0"></div>
      </div>
      <div class="relative z-10 w-full flex justify-between max-w-[80%]">
        <div class="px-4 flex flex-col justify-center text-white">
          <div class="font-bold text-6xl mb-4 animate-bounce">
            Tales Notebook
          </div>
  
          <div class="mb-8 text-xl pr-5">
            A new platform for publishing, translating, and reading mangas & comics
          </div>
  
          <tl-btn color="accent" class="max-w-[200px]" size="lg">
            Know more
          </tl-btn>
        </div>
  
        <tl-card
          class="shadow-lg"
          height="auto"
          width="auto"
          rounded="xl"
        >
          <tl-img
            src="/images/home-hero-showcase.png"
            :height="imageSize.height"
            :width="imageSize.width"
            class="object-cover"
          />
          <!-- Image by <a href="https://www.freepik.com/free-vector/hand-drawn-gaucho-drinking-mate-illustration_21251936.htm#query=character&position=42&from_view=keyword&track=sph">Freepik</a> -->
        </tl-card>
      </div>
    </div>
  </template>