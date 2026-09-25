import React, { useEffect, useState } from 'react'
import { useI18n } from '../locales/I18nContext'

export function Header({ compact }: { compact?: boolean }) {
  const { t, lang, setLang, options } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container inner">
        <a className="brand" href={compact ? '/' : '#top'} onClick={close}>
          <img src="/img/logo-mark.png" alt="GreenकBadi" width={44} height={44} />
          <span className="brand-text">
            <span className="brand-name">
              <span className="g">Green</span>
              <span className="ka">क</span>
              <span className="b">Badi</span>
            </span>
            {!compact && (
              <span className="brand-tag">Recycle Today. Better Tomorrow.</span>
            )}
          </span>
        </a>

        {!compact && (
          <nav
            className={`site-nav${open ? ' open' : ''}`}
            id="siteNav"
            aria-label="Main"
          >
            <a href="/" onClick={close}>
              {t('nav.home')}
            </a>
            <a href="/how-it-works" onClick={close}>
              {t('nav.how')}
            </a>
            <a href="/materials" onClick={close}>
              {t('nav.materials')}
            </a>
            <a href="/rates" onClick={close}>
              {t('nav.rates')}
            </a>
            <a href="/business" onClick={close}>
              {t('nav.business')}
            </a>
            <a href="/about" onClick={close}>
              {t('nav.about')}
            </a>
          </nav>
        )}

        <div className="header-actions">
          {!compact && (
            <span className="loc-chip" aria-label="Service city">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                />
              </svg>
              Siliguri
            </span>
          )}
          <label className="lang-select">
            <span className="sr-only">Language</span>
            <select
              aria-label="Language"
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
            >
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          {!compact && (
            <>
              <a className="btn btn-primary btn-sm header-cta" href="#download">
                <span>{t('nav.book')}</span>
              </a>
              <button
                className="nav-toggle"
                type="button"
                aria-label="Menu"
                aria-expanded={open}
                aria-controls="siteNav"
                onClick={() => setOpen((v) => !v)}
              >
                ☰
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
