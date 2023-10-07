<template>
    <div class="flex flex-col h-screen w-screen">
        <tl-toolbar>
            <tl-btn to="/" variant="text">
                <tl-icon name="game-icons:white-book" class="mr-2" />

                <div class="font-bold">Tales notebook</div>
            </tl-btn>

            <div class="flex-1"></div>

            <tl-btn to="/" variant="text">
                {{ $t('messages.home') }}
            </tl-btn>
            
            <tl-btn to="/faq" variant="text">
                FAQ
            </tl-btn>

        </tl-toolbar>

        <div class="flex-1">
            <slot />
        </div>

    </div>
</template>