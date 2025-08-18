import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'

const messages = { en, ru, uz }

const i18n = createI18n({
  legacy: false,            // Composition API (useI18n)
  globalInjection: true,    // template ichida $t, $d kabi global injeksiyalar uchun (optional)
  locale: 'uz',
  fallbackLocale: 'uz',
  messages
})

export default i18n