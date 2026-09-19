import React from 'react'
import { useI18n } from '../../locales/I18nContext'
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
              <span>
                <i className="cat-ico metal" /> Metal
              </span>
              <span>
                <i className="cat-ico elec" /> Electronics
              </span>
              <span>
                <i className="cat-ico paper" /> Paper
              </span>
              <span>
                <i className="cat-ico plastic" /> Plastic
              </span>
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
          <div className="impact-item reveal">
            <div>
              <strong>4</strong>
              <span>{t('impact.cats')}</span>
            </div>
          </div>
          <div className="impact-item reveal delay-1">
            <div>
              <strong>100%</strong>
              <span>{t('impact.digital')}</span>
            </div>
          </div>
          <div className="impact-item reveal delay-2">
            <div>
              <strong>4</strong>
              <span>{t('impact.lang')}</span>
            </div>
          </div>
          <div className="impact-item reveal delay-3">
            <div>
              <strong>4.8★</strong>
              <span>{t('impact.rating')}</span>
            </div>
          </div>
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
                  <h3>{t(`how.s${n}.title`)}</h3>
                  <p>{t(`how.s${n}.desc`)}</p>
                </li>
              </React.Fragment>
            ))}
          </ol>
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
          </div>
          <div className="why-panel" id="about">
            <div className="reveal delay-1">
              <h2>{t('why.title')}</h2>
              <ul className="why-list">
                {[1, 2, 3].map((n) => (
                  <li key={n}>
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
          <a className="btn btn-primary" href="#contact">
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
                <span className="lines">
                  <small>{t('download.soon')}</small>
                  <strong>{t('download.play')}</strong>
                </span>
              </a>
              <a className="store-badge store-apple" href="#download" aria-disabled="true">
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
                    <small>Hello, Rina</small>
                  </div>
                </header>
                <a className="mini-post" href="#download">
                  <span className="mini-post-go" aria-hidden="true">
                    +
                  </span>
                  <span className="mini-post-copy">
                    <strong>What do you want to sell today?</strong>
                  </span>
                </a>
                <div className="mini-cats">
                  <span>Metal</span>
                  <span>Electronics</span>
                  <span>Paper</span>
                  <span>Plastic</span>
                </div>
                <div className="mini-card">
                  <small>#c4e2a91b · Waiting</small>
                  <strong>Old fridge</strong>
                  <p>Electronics · Salt Lake</p>
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
            <a className="contact-pill" href="tel:+919800000000">
              <span className="ico">📞</span>
              <span>
                <strong>{t('contact.phone')}</strong>
                +91 98000 00000
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
            <a href="/privacy">{t('sec.privacy')}</a>
            {' · '}
            <a href="/terms">{t('sec.terms')}</a>
            {' · '}
            <a href="/delete-account">{t('sec.delete')}</a>
          </p>
        </div>
      </section>
    </main>
  )
}
