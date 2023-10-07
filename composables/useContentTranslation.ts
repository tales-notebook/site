export function useContentTranslation(query: string, ...pathParts: string[]){
    const { locale, fallbackLocale } = useI18n()

    return queryContent(query, ...pathParts).where({
      $or: [
        { _locale: locale.value },
        { _locale: fallbackLocale.value },
      ]
    })
}