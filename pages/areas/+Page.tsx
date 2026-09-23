import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { SERVICE_AREAS } from '../../data/siteContent'
import { useI18n } from '../../locales/I18nContext'
import { SITE } from '../../seo/site'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/areas"
      kicker={t('areas.kicker')}
      title={t('areas.title')}
      lead={t('areas.desc')}
    >
      <p>{t('areas.phase')}</p>
      <ul className="seo-area-list">
        {SERVICE_AREAS.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
      <p>{t('areas.note')}</p>
      <p>
        {t('areas.hq')}: {SITE.address.street}, {SITE.address.locality},{' '}
        {SITE.address.region}, India
      </p>
      <p className="section-more">
        <a className="text-link" href="/#download">
          {t('how.toApp')}
        </a>
        {' · '}
        <a className="text-link" href="/contact">
          {t('nav.contact')}
        </a>
        {' · '}
        <a className="text-link" href="/rates">
          {t('nav.rates')}
        </a>
      </p>
    </SeoPage>
  )
}
