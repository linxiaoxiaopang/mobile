import Cookies from 'js-cookie'
import { orderBy } from 'lodash'

export const I118N_LOCALE_KEY = 'language'
export const LANGUAGE_EN_KEY = 'en'
export const LANGUAGE_VI_KEY = 'vi'
export const LANGUAGE_ZH_CN_KEY = 'zh-CN'
export const DEFAULT_LANGUAGE = LANGUAGE_EN_KEY
export const DEFAULT_LANGUAGE_LABEL = 'english'
export const LANG_LIST = {
  [LANGUAGE_EN_KEY]: {
    label: 'English',
    value: 'en',
    sort: 0
  },
  [LANGUAGE_VI_KEY]: {
    label: 'Tiếng Việt',
    value: 'vi',
    sort: 1
  },
  [LANGUAGE_ZH_CN_KEY]: {
    label: '简体中文',
    value: 'zh-CN',
    sort: 2
  }
}

export const LANG_DIC = (function() {
  const list = Object.keys(LANG_LIST).map(prop => {
    return LANG_LIST[prop]
  })
  return orderBy(list, 'sort')
}())

const mapData = {
  [LANGUAGE_EN_KEY]: 'english',
  [LANGUAGE_ZH_CN_KEY]: 'chinese',
  [LANGUAGE_VI_KEY]: 'vietnamese',
  default: 'english'
}

/**
 * 根据映射关系返回prop
 * @returns {*|string}
 */
export function gatI18nLanguageProp() {
  return mapData[getI18nLanguage()] || mapData.default
}

export function getI18nLanguage() {
  let langData = null
  try {
    langData = JSON.parse(decodeURIComponent(Cookies.get(I118N_LOCALE_KEY)) )
  } catch {
  }
  const localLang =  langData?.value
  if (localLang) return localLang
  const isUseNavigatorLanguage = false //是否使用浏览器默认语言当做默认值
  if (isUseNavigatorLanguage) return navigator.language || navigator.userLanguage
  return process.env.VUE_APP_I18N_LOCALE || DEFAULT_LANGUAGE
}

export function getBackLocaleI18nLanguage() {
  return DEFAULT_LANGUAGE
}

export function setI18nLanguage(value, key = I118N_LOCALE_KEY, expires = 60) {
  const valueStr = encodeURIComponent(JSON.stringify(value))
  Cookies.set(key, valueStr, { expires })
}

