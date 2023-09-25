<script lang="ts" setup>

const images = [
  { src: '/images/home-hero-slide-1.png' },
  { src: '/images/home-hero-slide-2.png' },
  { src: '/images/home-hero-slide-3.png' },
  { src: '/images/home-hero-slide-4.png' },
  { src: '/images/home-hero-slide-5.png' },
  { src: '/images/home-hero-slide-6.png' },
  { src: '/images/home-hero-slide-7.png' },
]

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
  
          <tl-btn color="accent" class="max-w-[200px]" size="lg" to="https://forms.gle/zurRrBqm6hzCj8Xv7">
            Know more
          </tl-btn>
        </div>

        <tl-carrousel :items="images" width="800" height="500">
          <template #item="{ item }">
              <tl-img
                :src="item.src"
                :height="500"
                class="w-full"
              />
          </template>
        </tl-carrousel>
  
        <!-- <tl-card
          class="shadow-lg"
          height="auto"
          width="auto"
          rounded="xl"
        >
          <tl-img
            src="/images/home-hero-slide-1.png"
            :height="500"
            class="object-cover"
          />
        </tl-card> -->
      </div>
    </div>
  </template>