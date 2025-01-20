import { useQuery } from 'react-query'
import translations from '../mocks/labels.json'
import esTranslations from '../mocks/es.json'
import enTranslations from '../mocks/en.json'
import itTranslations from '../mocks/it.json'
import deTranslations from '../mocks/de.json'
import nlTranslations from '../mocks/nl.json'
import ptTranslations from '../mocks/pt.json'
import frTranslations from '../mocks/fr.json'
import { transformTranslation } from '../helpers/transformTranslations'

const translationImports: Record<string, any> = {
  es: transformTranslation(esTranslations),
  en: transformTranslation(enTranslations),
  it: transformTranslation(itTranslations),
  de: transformTranslation(deTranslations),
  nl: transformTranslation(nlTranslations),
  pt: transformTranslation(ptTranslations),
  fr: transformTranslation(frTranslations),
}

export const useLabels = () =>
  useQuery('labels', async () => {
    const allTranslations: Record<string, any> = {}
    for (const language of translations.labels) {
      allTranslations[language] = translationImports[language]
    }
    return allTranslations
  })
