<script lang="ts" setup>

const breakpoint = useBreakpoint()

const isMobile = breakpoint.smallerOrEqual('sm')
const isTablet = breakpoint.smallerOrEqual('md')
const isLaptop = breakpoint.smallerOrEqual('lg')

const height = computed(() => {
  if (isMobile.value) {
    return 200
  }
  
  if (isTablet.value) {
    return 350
  }

  if (isLaptop.value) {
    return 300
  }

  return 500
})

const width = computed(() => {

  if (isMobile.value) {
    return 280
  }

  if (isTablet.value) {
    return 600
  }

  if (isLaptop.value) {
    return 500
  }

  return 800
})


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
    <div class="min-h-screen flex items-center justify-center relative">
      <div class="absolute inset-0 h-full">
        <img
          src="/images/home-hero-bg.jpg"
          class="h-full w-full object-cover"
        />
        <div class="bg-gradient-to-b from-transparent to-black absolute inset-0"></div>
      </div>

      <div class="relative z-10 w-full flex flex-wrap lg:flex-nowrap gap-y-4 justify-between max-w-[90%]">
        <div class="px-4 flex flex-col justify-center text-white w-full text-center lg:text-left lg:w-auto">
          <div class="font-bold text-4xl lg:text-6xl mb-4 animate-bounce">
            Tales Notebook
          </div>
  
          <div class="mb-5 lg:text-xl pr-5">
            A new platform for publishing, translating, and reading mangas & comics
          </div>
  
          <tl-btn color="accent" class="w-full mx-auto lg:mx-0 max-w-[200px]"
            :size="isTablet ? 'md' : 'lg' " to="#newsletter">
            Know more
          </tl-btn>
        </div>

        <div class="ml-auto mx-auto">
          <tl-carrousel :items="images" :width="width" :height="height">
            <template #item="{ item }">
                <tl-img
                  :src="item.src"
                  :height="height"
                  class="w-full"
                />
            </template>
          </tl-carrousel>
        </div>

      </div>
    </div>
  </template>