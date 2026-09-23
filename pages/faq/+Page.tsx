import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { useI18n } from '../../locales/I18nContext'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/faq"
      title={t('faq.title')}
      lead={t('faq.pageLead')}
    >
      <div className="faq-grid seo-faq-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <details key={n} className="faq-item" open={n === 1}>
            <summary>{t(`faq.q${n}`)}</summary>
            <p>{t(`faq.a${n}`)}</p>
          </details>
        ))}
      </div>
      <p className="section-more">
        <a className="text-link" href="/how-it-works">
          {t('nav.how')}
        </a>
        {' · '}
        <a className="text-link" href="/#download">
          {t('faq.toApp')}
        </a>
        {' · '}
        <a className="text-link" href="/contact">
          {t('nav.contact')}
        </a>
      </p>
    </SeoPage>
  )
}
