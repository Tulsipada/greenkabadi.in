import React, { useState } from 'react'
import { useI18n } from '../../locales/I18nContext'
import { RelatedLinks } from '../../components/RelatedLinks'
import { SITE } from '../../seo/site'

export function Page() {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('1')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError(t('contact.errRequired'))
      return
    }

    const typeLabel = t(`contact.opt${type}`)
    const subject = encodeURIComponent(
      `GreenकBadi contact - ${typeLabel} - ${name.trim()}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Email: ${email.trim() || '-'}`,
        `Type: ${typeLabel}`,
        '',
        message.trim(),
      ].join('\n'),
    )
    window.location.href = `mailto:support@greenkabadi.in?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main className="legal-page contact-page">
      <div className="container legal-card contact-card">
        <p className="section-kicker">{t('contact.kicker')}</p>
        <h1>{t('contact.title')}</h1>
        <p className="updated">{t('contact.desc')}</p>

        <div className="contact-row contact-row-page">
          <a className="contact-pill" href="mailto:support@greenkabadi.in">
            <span className="ico" aria-hidden="true">
              📧
            </span>
            <span>
              <strong>{t('contact.email')}</strong>
              support@greenkabadi.in
            </span>
          </a>
          <a className="contact-pill" href={`tel:${SITE.phone}`}>
            <span className="ico" aria-hidden="true">
              📞
            </span>
            <span>
              <strong>{t('contact.phone')}</strong>
              {SITE.phoneDisplay}
            </span>
          </a>
          <div className="contact-pill">
            <span className="ico" aria-hidden="true">
              📍
            </span>
            <span>
              <strong>{t('contact.area')}</strong>
              <span>{t('contact.areaVal')}</span>
            </span>
          </div>
        </div>

        <h2 className="contact-form-title">{t('contact.formTitle')}</h2>

        {sent ? (
          <div className="delete-ok" role="status">
            <strong>{t('contact.ok')}</strong>
            <p>
              {t('contact.okHint')}{' '}
              <a href="mailto:support@greenkabadi.in">support@greenkabadi.in</a>
            </p>
          </div>
        ) : (
          <form className="delete-form contact-form" onSubmit={onSubmit} noValidate>
            <label className="delete-field">
              <span>{t('contact.name')}</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="delete-field">
              <span>{t('contact.phoneLabel')}</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+91 …"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <label className="delete-field">
              <span>{t('contact.email')}</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="delete-field">
              <span>{t('contact.type')}</span>
              <select
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">{t('contact.opt1')}</option>
                <option value="2">{t('contact.opt2')}</option>
                <option value="3">{t('contact.opt3')}</option>
                <option value="4">{t('contact.opt4')}</option>
              </select>
            </label>
            <label className="delete-field">
              <span>{t('contact.message')}</span>
              <textarea
                name="message"
                rows={5}
                placeholder={t('contact.msgPh')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            {error ? (
              <p className="delete-error" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="btn btn-primary">
              {t('contact.send')}
            </button>
          </form>
        )}

        <p className="legal-links contact-page-legal">
          <a href="/privacy">{t('sec.privacy')}</a>
          {' · '}
          <a href="/terms">{t('sec.terms')}</a>
          {' · '}
          <a href="/delete-account">{t('sec.delete')}</a>
        </p>

        <RelatedLinks currentPath="/contact" />
      </div>
    </main>
  )
}
