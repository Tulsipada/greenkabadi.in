import React from 'react'
import { useI18n } from '../../locales/I18nContext'
import { SITE } from '../../seo/site'
import { useReveal } from '../useReveal'

const RATES = [
  { name: 'Iron', price: '₹22' },
  { name: 'Aluminium', price: '₹70' },
  { name: 'E-waste', price: '₹45' },
  { name: 'Paper', price: '₹12' },
  { name: 'Plastic', price: '₹28' },
]

const MATERIALS = [
  {
    key: 'metal',
    title: 'mat.metal.title',
    list: 'mat.metal.list',
    src: '/img/website/metal.jpg',
    alt: 'Scrap metal - copper, iron, aluminium, steel',
  },
  {
    key: 'elec',
    title: 'mat.elec.title',
    list: 'mat.elec.list',
    src: '/img/website/electronics.jpg',
    alt: 'E-waste - fridges, TVs, laptops',
  },
  {
    key: 'paper',
    title: 'mat.paper.title',
    list: 'mat.paper.list',
    src: '/img/website/paper.jpg',
    alt: 'Paper scrap - newspaper, carton, books',
  },
  {
    key: 'plastic',
    title: 'mat.plastic.title',
    list: 'mat.plastic.list',
    src: '/img/website/plastic.jpg',
    alt: 'Plastic scrap - PET, HDPE, mixed',
  },
]

const IMPACT = [
  {
    value: '4',
    label: 'impact.cats',
    path: 'M17 8C8 10 5.9 16.2 3.8 19.5l2.4.8C8.8 16 11 12.5 17 11.2V8zm-5-6C7.6 2 4 5.6 4 10c0 1.9.7 3.6 1.8 5l1.5-1.3A5.9 5.9 0 0 1 6 10c0-3.3 2.7-6 6-6s6 2.7 6 6c0 .9-.2 1.8-.6 2.6l1.7 1A7.9 7.9 0 0 0 20 10c0-4.4-3.6-8-8-8z',
  },
  {
    value: '100%',
    label: 'impact.digital',
    path: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.6-4.2-4.2 1.4-1.4L11 13.8l5.6-5.6 1.4 1.4L11 16.6z',
  },
  {
    value: '4',
    label: 'impact.lang',
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.1a15.4 15.4 0 0 0-1.3-5.4A8.03 8.03 0 0 1 19.9 11zM12 4c.9 0 2.4 2.3 3.1 6H8.9C9.6 6.3 11.1 4 12 4zM4.1 13h3.1c.2 1.9.7 3.7 1.3 5.4A8.03 8.03 0 0 1 4.1 13zm3.1-2H4.1a8.03 8.03 0 0 1 4.4-5.4A15.4 15.4 0 0 0 7.2 11zM12 20c-.9 0-2.4-2.3-3.1-6h6.2c-.7 3.7-2.2 6-3.1 6zm3.5-1.6c.6-1.7 1.1-3.5 1.3-5.4h3.1a8.03 8.03 0 0 1-4.4 5.4z',
  },
  {
    value: '4.8★',
    label: 'impact.rating',
    path: 'M12 17.3 18.2 21l-1.6-7.1L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.7L5.8 21z',
  },
]

const HOW_ICONS = [
  'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10z',
  'M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1V8zM8 18.5A1.5 1.5 0 1 1 8 15a1.5 1.5 0 0 1 0 3.5zm10 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM17 8h2.5l1.5 3H17V8z',
  'M12 3a2 2 0 0 0-2 2c0 .37.1.71.28 1L5.15 9.4A2.1 2.1 0 0 0 4.3 11c0 1.16.94 2.1 2.1 2.1h.25L12 21l5.35-7.9h.25c1.16 0 2.1-.94 2.1-2.1 0-.62-.28-1.2-.75-1.6L13.72 6c.18-.29.28-.63.28-1a2 2 0 0 0-2-2zm-3.2 8.6h6.4L12 16.9 8.8 11.6z',
  'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
]

const WHY_ICONS = [
  'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.6-4.2-4.2 1.4-1.4L11 13.8l5.6-5.6 1.4 1.4L11 16.6z',
  'M13.5 3H8v2h5.5c1.4 0 2.5 1.1 2.5 2.5S14.9 10 13.5 10H11v2h2.5c2.5 0 4.5-2 4.5-4.5S16 3 13.5 3zM11 14H8v2h3c1.1 0 2 .9 2 2s-.9 2-2 2H8v2h3c2.2 0 4-1.8 4-4s-1.8-4-4-4zM7 3H5v18h2V3z',
  'M17 8C8 10 5.9 16.2 3.8 19.5l2.4.8C8.8 16 11 12.5 17 11.2V8zM12 2C7.6 2 4 5.6 4 10c0 1.9.7 3.6 1.8 5l1.5-1.3A5.9 5.9 0 0 1 6 10c0-3.3 2.7-6 6-6s6 2.7 6 6c0 .9-.2 1.8-.6 2.6l1.7 1A7.9 7.9 0 0 0 20 10c0-4.4-3.6-8-8-8z',
]

export function HomePage() {
  const { t } = useI18n()
  useReveal()

  return (
    <main id="top">
      <section className="hero" id="home">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                />
              </svg>
              <span>{t('hero.badge')}</span>
            </div>
            <h1>{t('hero.title')}</h1>
            <p className="lead">{t('hero.lead')}</p>
            <div className="hero-cats" aria-label="Materials">
              <a href="#materials">
                <i className="cat-ico metal" /> Metal
              </a>
              <a href="#materials">
                <i className="cat-ico elec" /> Electronics
              </a>
              <a href="#materials">
                <i className="cat-ico paper" /> Paper
              </a>
              <a href="#materials">
                <i className="cat-ico plastic" /> Plastic
              </a>
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#download">
                <span>{t('hero.cta1')}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-outline" href="#rates">
                {t('hero.cta2')}
              </a>
            </div>
            <p className="trust-note">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-2a2 2 0 0 1 4 0v2h-4V6zm3 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
              <span>{t('hero.trust')}</span>
            </p>
          </div>
          <div className="hero-visual reveal delay-1">
            <figure className="hero-photo">
              <img
                src="/img/website/hero.jpg"
                alt="GreenकBadi doorstep scrap pickup - recycle today, better tomorrow"
                width={1200}
                height={800}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="impact" aria-label="Impact">
        <div className="container impact-row">
          {IMPACT.map((item, i) => (
            <div
              key={item.label}
              className={`impact-item reveal${i ? ` delay-${i}` : ''}`}
            >
              <span className="impact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="currentColor" d={item.path} />
                </svg>
              </span>
              <div>
                <strong>{item.value}</strong>
                <span>{t(item.label)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="section how">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-kicker">{t('how.kicker')}</span>
            <h2>{t('how.title')}</h2>
            <p>{t('how.desc')}</p>
          </div>
          <ol className="how-steps reveal">
            {[1, 2, 3, 4].map((n, i) => (
              <React.Fragment key={n}>
                {i > 0 && (
                  <li className="how-arrow" aria-hidden="true">
                    →
                  </li>
                )}
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
          <p className="section-more reveal">
            <a className="text-link" href="#download">
              {t('how.toApp')}
            </a>
            {' · '}
            <a className="text-link" href="#faq">
              {t('how.toFaq')}
            </a>
          </p>
        </div>
      </section>

      <section id="materials" className="section materials alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>{t('mat.title')}</h2>
            <p>{t('mat.desc')}</p>
          </div>
          <div className="mat-grid">
            {MATERIALS.map((m, i) => (
              <article
                key={m.key}
                className={`mat-card reveal${i ? ` delay-${i}` : ''}`}
              >
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
                  <h3>{t(m.title)}</h3>
                  <p>{t(m.list)}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="section-more reveal">
            <a className="text-link" href="#rates">
              {t('mat.toRates')}
            </a>
            {' · '}
            <a className="text-link" href="#download">
              {t('mat.toBook')}
            </a>
          </p>
        </div>
      </section>

      <section id="rates" className="section rates-why">
        <div className="container rates-why-grid">
          <div className="rates-panel reveal">
            <h2>{t('rates.title')}</h2>
            <p className="rates-sub">{t('rates.desc')}</p>
            <ul className="rate-list">
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
            <a className="text-link" href="#download">
              {t('rates.viewAll')}
            </a>
            {' · '}
            <a className="text-link" href="#materials">
              {t('rates.toMats')}
            </a>
          </div>
          <div className="why-panel" id="about">
            <div className="reveal delay-1">
              <h2>{t('why.title')}</h2>
              <ul className="why-list">
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
            </div>
          </div>
        </div>
      </section>

      <section id="business" className="section business">
        <div className="business-media">
          <img
            src="/img/website/business.jpg"
            alt="Institutional scrap pickup for businesses and healthcare in Siliguri"
            width={1200}
            height={800}
            loading="lazy"
          />
        </div>
        <div className="container business-content reveal">
          <span className="biz-kicker">{t('biz.kicker')}</span>
          <h2>{t('biz.title')}</h2>
          <p>{t('biz.desc')}</p>
          <div className="biz-segments">
            <span>🏥 Medical institutes</span>
            <span>💊 Healthcare</span>
            <span>🏪 Shops</span>
            <span>🏢 Offices</span>
            <span>🏠 Apartments</span>
            <span>🏭 Businesses</span>
          </div>
          <a className="btn btn-primary" href="/contact">
            <span>{t('biz.cta')}</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="download" className="section app-promo">
        <div className="container app-grid">
          <div className="app-copy reveal">
            <h2>{t('download.title')}</h2>
            <p>{t('download.desc')}</p>
            <div className="store-row">
              <a
                className="store-badge"
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="play-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#34A853"
                    d="M3 20.5V3.5c0-.8.5-1.2 1.1-.9l14.6 8.4c.6.4.6 1 0 1.3L4.1 21.4c-.6.3-1.1-.1-1.1-.9z"
                  />
                </svg>
                <span className="lines">
                  <small>{t('download.soon')}</small>
                  <strong>{t('download.play')}</strong>
                </span>
              </a>
              <a className="store-badge store-apple" href="#download" aria-disabled="true">
                <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                  <path
                    fill="#fff"
                    d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.1 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.02-.01-2.2-.8-2.2-3.4zM14.3 6.3c.6-.7 1-1.7.9-2.7-1 .1-2.1.6-2.8 1.4-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.9-1.4z"
                  />
                </svg>
                <span className="lines">
                  <small>{t('download.appleSoon')}</small>
                  <strong>{t('download.apple')}</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="app-visual reveal delay-1">
            <div className="phone-frame" aria-hidden="true">
              <div className="phone-screen">
                <header className="mini-head">
                  <img src="/img/logo-mark.png" alt="" width={28} height={28} />
                  <div>
                    <strong>
                      <span className="g">Green</span>
                      <span className="ka">क</span>Badi
                    </strong>
                    <small>{t('hero.mockHello')}</small>
                  </div>
                </header>

                <div className="mini-addr">
                  <span className="mini-addr-pin" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <span className="mini-addr-copy">
                    <small>{t('hero.mockAddrLabel')}</small>
                    <strong>Salt Lake, 700091</strong>
                  </span>
                </div>

                <a className="mini-post" href="#download">
                  <span className="mini-post-go" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                  <span className="mini-post-copy">
                    <strong>{t('hero.mockPost')}</strong>
                  </span>
                </a>

                <div className="mini-cat-scroll">
                  <a className="mini-cat" href="#materials">
                    <span className="mini-cat-ico">
                      <img src="/img/website/plastic.jpg" alt="" />
                    </span>
                    <strong>Plastic</strong>
                  </a>
                  <a className="mini-cat" href="#materials">
                    <span className="mini-cat-ico">
                      <img src="/img/website/paper.jpg" alt="" />
                    </span>
                    <strong>Paper</strong>
                  </a>
                  <a className="mini-cat" href="#materials">
                    <span className="mini-cat-ico">
                      <img src="/img/website/metal.jpg" alt="" />
                    </span>
                    <strong>Metal</strong>
                  </a>
                  <a className="mini-cat" href="#materials">
                    <span className="mini-cat-ico">
                      <img src="/img/website/electronics.jpg" alt="" />
                    </span>
                    <strong>E-waste</strong>
                  </a>
                </div>

                <p className="mini-section">{t('hero.mockRecent')}</p>
                <div className="mini-card">
                  <div className="mini-card-row">
                    <span className="mini-oid">#c4e2a91b</span>
                    <span className="mini-chip waiting">{t('hero.job2.status')}</span>
                  </div>
                  <strong>{t('hero.job1.title')}</strong>
                  <p>Electronics · ~40 kg · Salt Lake</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>{t('faq.title')}</h2>
          </div>
          <div className="faq-grid">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <details
                key={n}
                className={`faq-item reveal${i % 2 ? ' delay-1' : ''}`}
                open={n === 1}
              >
                <summary>{t(`faq.q${n}`)}</summary>
                <p>{t(`faq.a${n}`)}</p>
              </details>
            ))}
          </div>
          <p className="section-more reveal">
            <a className="text-link" href="#download">
              {t('faq.toApp')}
            </a>
            {' · '}
            <a className="text-link" href="/privacy">
              {t('sec.privacy')}
            </a>
            {' · '}
            <a className="text-link" href="/terms">
              {t('sec.terms')}
            </a>
          </p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-inner reveal">
          <div className="section-head">
            <span className="section-kicker">{t('contact.kicker')}</span>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.desc')}</p>
          </div>
          <div className="contact-row">
            <a className="contact-pill" href="mailto:hello@greenkabadi.in">
              <span className="ico">📧</span>
              <span>
                <strong>{t('contact.email')}</strong>
                hello@greenkabadi.in
              </span>
            </a>
            <a className="contact-pill" href={`tel:${SITE.phone}`}>
              <span className="ico">📞</span>
              <span>
                <strong>{t('contact.phone')}</strong>
                {SITE.phoneDisplay}
              </span>
            </a>
            <div className="contact-pill">
              <span className="ico">📍</span>
              <span>
                <strong>{t('contact.area')}</strong>
                <span>{t('contact.areaVal')}</span>
              </span>
            </div>
          </div>
          <p className="legal-links">
            <a href="/contact">{t('nav.contact')}</a>
            {' · '}
            <a href="/privacy">{t('sec.privacy')}</a>
            {' · '}
            <a href="/terms">{t('sec.terms')}</a>
            {' · '}
            <a href="/delete-account">{t('sec.delete')}</a>
          </p>
          <p className="section-more" style={{ marginTop: 12 }}>
            <a className="text-link" href="/contact">
              {t('contact.openPage')}
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
