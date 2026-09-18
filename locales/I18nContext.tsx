import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { DICT, LANG_OPTIONS, type Lang, t as translate } from './i18n'

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  options: typeof LANG_OPTIONS
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'gk_lang'

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (saved && DICT[saved]) return saved
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLangState(readInitialLang())
    setReady(true)
  }, [])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
    }
  }, [])

  useEffect(() => {
    if (ready) document.documentElement.lang = lang
  }, [lang, ready])

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: (key: string) => translate(lang, key),
      options: LANG_OPTIONS,
    }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
