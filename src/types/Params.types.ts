
export type ParamsTypes = 'locale'

export type ParamsMap = {
  locale: 'es' | 'en'
}

export type ParamsInterface = Record<ParamsTypes, ParamsMap[ParamsTypes]>