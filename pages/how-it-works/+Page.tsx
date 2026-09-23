import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { HOW_ICONS } from '../../data/siteContent'
import { useI18n } from '../../locales/I18nContext'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/how-it-works"
      kicker={t('how.kicker')}
      title={t('how.title')}
      lead={t('how.desc')}
    >
      <ol className="how-steps seo-how-steps">
        {[1, 2, 3, 4].map((n, i) => (
          <React.Fragment key={n}>
            {i > 0 ? (
              <li className="how-arrow" aria-hidden="true">
                →
              </li>
            ) : null}
            <li className="how-step">
              <span className="how-num" aria-hidden="true">
                {n}
              </span>
              <span className="how-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d={HOW_ICONS[i]} />
                </svg>
              </span>
              <h3>{t(`how.s${n}.title`)}</h3>
              <p>{t(`how.s${n}.desc`)}</p>
            </li>
          </React.Fragment>
        ))}
      </ol>
      <p className="section-more">
        <a className="text-link" href="/#download">
          {t('how.toApp')}
        </a>
        {' · '}
        <a className="text-link" href="/faq">
          {t('how.toFaq')}
        </a>
        {' · '}
        <a className="text-link" href="/rates">
          {t('nav.rates')}
        </a>
      </p>
    </SeoPage>
  )
}
