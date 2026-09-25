import React from 'react'
import { SeoPage } from '../../components/SeoPage'
import { WHY_ICONS } from '../../data/siteContent'
import { useI18n } from '../../locales/I18nContext'

export function Page() {
  const { t } = useI18n()

  return (
    <SeoPage
      currentPath="/about"
      kicker={t('about.kicker')}
      title={t('about.title')}
      lead={t('about.desc')}
    >
      <p>{t('about.p1')}</p>
      <p>{t('about.p2')}</p>
      <p>{t('about.p3')}</p>

      <h2>{t('why.title')}</h2>
      <ul className="why-list seo-why-list">
        {[1, 2, 3].map((n) => (
          <li key={n}>
            <span className="why-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d={WHY_ICONS[n - 1]} />
              </svg>
            </span>
            <div>
              <h3>{t(`why.t${n}`)}</h3>
              <p>{t(`why.d${n}`)}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2>{t('about.f1.title')}</h2>
      <p>
        <strong>{t('about.f1.name')}</strong>
        <br />
        <span style={{ color: 'var(--lp-soft)' }}>{t('about.f1.role')}</span>
      </p>
      <p>{t('about.f1.desc')}</p>

      <p className="section-more">
        <a className="text-link" href="/areas">
          {t('nav.areas')}
        </a>
        {' · '}
        <a className="text-link" href="/contact">
          {t('nav.contact')}
        </a>
        {' · '}
        <a className="text-link" href="/#download">
          {t('nav.download')}
        </a>
      </p>
    </SeoPage>
  )
}
