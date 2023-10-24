<script setup lang="ts">

const breakpoint = useBreakpoint()

const isMd = breakpoint.smallerOrEqual('md')

</script>
<template>
    <div id="newsletter" class="min-h-screen flex items-center justify-center bg-secondary-background" >
        <div class="px-5 text-center flex flex-col gap-y-10 items-center">
            <div class="text-4xl lg:text-6xl font-bold">
                Sign our newsletter
            </div>
            
            <div class="w-full text-lg lg:text-lg flex flex-wrap max-w-[500px]">
                We will release the beta version platform in a near future, if you want to be notified when it's ready, sign our newsletter.
            </div>

            <tl-btn color="accent" class="w-full mx-auto lg:mx-0 max-w-[200px]"
                :size="isMd ? 'md' : 'lg' " to="http://eepurl.com/iBFgtw">
                Sign up
            </tl-btn>
        </div>
    </div>
</template>