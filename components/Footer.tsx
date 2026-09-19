import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { useI18n } from '../locales/I18nContext'

export function Footer() {
  const { t } = useI18n()
  const { urlPathname } = usePageContext()
  const onPrivacy = urlPathname === '/privacy'
  const onTerms = urlPathname === '/terms'
  const onDelete = urlPathname === '/delete-account'
  const onContact = urlPathname === '/contact'

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a className="brand footer-brand" href="/#top">
            <img src="/img/logo-mark.png" alt="GreenकBadi" width={40} height={40} />
            <span className="brand-text">
              <span className="brand-name brand-name-light">
                <span className="g">Green</span>
                <span className="ka">क</span>
                <span className="b">Badi</span>
              </span>
              <span className="brand-tag light">
                Recycle Today. Better Tomorrow.
              </span>
            </span>
          </a>
          <nav className="footer-nav" aria-label="Footer">
            <a href="/#how">{t('nav.how')}</a>
            <a href="/#materials">{t('nav.materials')}</a>
            <a href="/#rates">{t('nav.rates')}</a>
            <a href="/#business">{t('nav.business')}</a>
            <a href="/#download">{t('nav.download')}</a>
            <a href="/#faq">{t('nav.faq')}</a>
            {!onContact ? <a href="/contact">{t('nav.contact')}</a> : null}
          </nav>
          <div className="social" aria-label="Social">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
                />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M23 12s0-3.4-.4-5c-.2-1-1-1.8-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.6.5c-1 .2-1.8 1-2 2C1 8.6 1 12 1 12s0 3.4.4 5c.2 1 1 1.8 2 2 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.2 1.8-1 2-2 .4-1.6.4-5 .4-5zM9.8 15.5v-7l6 3.5-6 3.5z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('foot.copy')}</span>
          <div className="footer-legal">
            {!onPrivacy ? <a href="/privacy">{t('foot.privacy')}</a> : null}
            {!onTerms ? <a href="/terms">{t('foot.terms')}</a> : null}
            {!onDelete ? <a href="/delete-account">{t('foot.delete')}</a> : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
