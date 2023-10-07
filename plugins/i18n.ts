import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(async ({ vueApp }) => {
    const response = await $fetch('/api/i18n')

    const messages: any = {}
    
    Object.keys(response).forEach((lang) => {
        messages[lang] = response[lang]
    })

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en-US',
        fallbackLocale: 'en-US',
        messages: messages
    })

    vueApp.use(i18n)
})
