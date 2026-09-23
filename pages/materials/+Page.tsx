import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { MATERIALS } from '../../data/siteContent'
import { useI18n } from '../../locales/I18nContext'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/materials"
      kicker={t('mat.kicker')}
      title={t('mat.title')}
      lead={t('mat.desc')}
    >
      <div className="mat-grid seo-mat-grid">
        {MATERIALS.map((m) => (
          <article key={m.key} className="mat-card">
            <div className="mat-img">
              <img
                src={m.src}
                alt={m.alt}
                width={640}
                height={420}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mat-body">
              <h2>{t(m.title)}</h2>
              <p>{t(m.list)}</p>
              <p>{t(m.desc)}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="section-more">
        <a className="text-link" href="/rates">
          {t('mat.toRates')}
        </a>
        {' · '}
        <a className="text-link" href="/#download">
          {t('mat.toBook')}
        </a>
      </p>
    </SeoPage>
  )
}
