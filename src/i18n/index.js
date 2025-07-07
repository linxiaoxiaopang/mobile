/* eslint-disable */
import {
  getI18nLanguage,
  getBackLocaleI18nLanguage,
  LANG_LIST,
  setI18nLanguage
} from './utils'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z\d-_,\s]+\.js$/i
  )
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z\d-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

// function loadLanguageAsync() {
//   const lang = getI18nLanguage()
//   return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/locales/${lang}.js`)
// }



const i18n = new VueI18n({
  //获取语言
  locale: getI18nLanguage(),
  fallbackLocale: getBackLocaleI18nLanguage(),
  messages: loadLocaleMessages()
})


// loadLanguageAsync().then(res => {
//   i18n.setLocaleMessage(getI18nLanguage(), res.default)
// })

//添加全局变量
window.$i18n = i18n
window.$t = i18n.t.bind(i18n)

function initLang() {
  const { fallbackLocale, locale } = $i18n
  if (!LANG_LIST[locale]) $i18n.locale = fallbackLocale
  setI18nLanguage(LANG_LIST[$i18n.locale])
}

initLang()

export default i18n
