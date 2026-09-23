import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { RATES } from '../../data/siteContent'
import { useI18n } from '../../locales/I18nContext'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/rates"
      kicker={t('rates.kicker')}
      title={t('rates.title')}
      lead={t('rates.desc')}
    >
      <ul className="rate-list seo-rate-list">
        {RATES.map((r) => (
          <li key={r.name}>
            <span>{r.name}</span>
            <strong>
              {r.price}
              <span>/kg</span>
            </strong>
          </li>
        ))}
      </ul>
      <p className="seo-note">{t('rates.note')}</p>
      <p className="section-more">
        <a className="text-link" href="/materials">
          {t('rates.toMats')}
        </a>
        {' · '}
        <a className="text-link" href="/#download">
          {t('how.toApp')}
        </a>
        {' · '}
        <a className="text-link" href="/contact">
          {t('nav.contact')}
        </a>
      </p>
    </SeoPage>
  )
}
