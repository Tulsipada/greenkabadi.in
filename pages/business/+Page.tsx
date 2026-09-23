import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { useI18n } from '../../locales/I18nContext'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/business"
      kicker={t('biz.kicker')}
      title={t('biz.title')}
      lead={t('biz.desc')}
    >
      <div className="biz-segments seo-biz-segments">
        <span>Medical institutes</span>
        <span>Healthcare</span>
        <span>Shops</span>
        <span>Offices</span>
        <span>Apartments</span>
        <span>Businesses</span>
      </div>

      <h2>{t('hosp.title')}</h2>
      <p>{t('hosp.desc')}</p>
      <ul className="seo-feature-list">
        {[1, 2, 3].map((n) => (
          <li key={n}>
            <strong>{t(`hosp.p${n}.title`)}</strong>
            <p>{t(`hosp.p${n}.desc`)}</p>
          </li>
        ))}
      </ul>

      <p className="section-more">
        <a className="btn btn-primary" href="/contact">
          <span>{t('biz.cta')}</span>
          <span aria-hidden="true">→</span>
        </a>
      </p>
    </SeoPage>
  )
}
