import { languages, i18n, defaultLang } from './ui';

export type i18nKey = keyof (typeof i18n)[typeof defaultLang];
export type langKey = keyof typeof languages;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in i18n) return lang as langKey;
  return defaultLang;
}

export function useTranslations(lang: langKey) {
  return function t(key: i18nKey) {
    return i18n[lang][key] || i18n[defaultLang][key];
  };
}
