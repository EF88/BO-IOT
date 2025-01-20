export const transformTranslation = (translations: Record<string, string>) =>
  // const translationArray: {label:string, value:string}[] =[]
  // Object.entries(translations).map(([key, value]: [string, string]) => {
  //     translationArray.push({label: key, value})
  // });
  // return translationArray
  translations

export const flags: Record<string, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  it: '🇮🇹',
  de: '🇩🇪',
  nl: '🇳🇱',
  fr: '🇫🇷',
  pt: '🇵🇹',
}

export const displayTranslation = (translation: string, language: string) =>
  `${flags[language]}  ${translation}`
