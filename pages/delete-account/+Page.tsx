import React, { useState } from 'react'
import { RelatedLinks } from '../../components/RelatedLinks'
import { SITE } from '../../seo/site'

export function Page() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please fill name, phone and email registered with GreenकBadi.')
      return
    }
    if (!confirm) {
      setError('Please confirm that you want to permanently delete your account.')
      return
    }

    const subject = encodeURIComponent('Account deletion request - GreenकBadi')
    const body = encodeURIComponent(
      [
        'I request permanent deletion of my GreenकBadi account.',
        '',
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Email: ${email.trim()}`,
        '',
        'Please delete my profile and personal data as described on https://greenkabadi.in/delete-account',
      ].join('\n'),
    )
    window.location.href = `mailto:${SITE.supportEmail}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <main className="legal-page">
      <div className="container legal-card">
        <h1>Delete account · खाता हटाएँ</h1>
        <p className="updated">Last updated: 19 Sep 2026</p>
        <p>
          Google Play and privacy rules require a clear way to delete your
          GreenकBadi account. You can delete from the app, or request deletion
          from this page if you no longer have access to the app. Full details
          are in our <a href="/privacy">Privacy Policy</a> and{' '}
          <a href="/terms">Terms &amp; Conditions</a>.
        </p>

        <div className="delete-warn" role="note">
          <strong>This cannot be undone</strong>
          <p>
            Deleting your account removes your profile, saved addresses, chat
            history and in-app receipts. Complete or cancel any active pickups
            first.
          </p>
        </div>

        <h2>1. Delete from the app (recommended)</h2>
        <ol className="delete-steps">
          <li>Open the GreenकBadi customer app and sign in</li>
          <li>Go to <strong>Profile</strong> → <strong>Settings</strong></li>
          <li>Tap <strong>Delete account</strong></li>
          <li>Type <strong>DELETE</strong> to confirm</li>
        </ol>
        <p>
          Your account is deactivated immediately. Personal data is removed or
          anonymised as described below.
        </p>

        <h2>2. Request deletion from this website</h2>
        <p>
          If you cannot open the app, send a deletion request with the phone or
          email used to register. We process requests within{' '}
          <strong>7 working days</strong>.
        </p>

        {sent ? (
          <div className="delete-ok" role="status">
            <strong>Email draft opened</strong>
            <p>
              Send the email from your mail app to complete the request. If
              nothing opened, write to{' '}
              <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>{' '}
              with subject &quot;Account deletion request&quot;.
            </p>
          </div>
        ) : (
          <form className="delete-form" onSubmit={onSubmit} noValidate>
            <label className="delete-field">
              <span>Full name</span>
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
              <span>Registered phone</span>
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
              <span>Registered email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="delete-check">
              <input
                type="checkbox"
                checked={confirm}
                onChange={(e) => setConfirm(e.target.checked)}
              />
              <span>
                I understand this permanently deletes my GreenकBadi account and
                related personal data.
              </span>
            </label>
            {error ? (
              <p className="delete-error" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="btn btn-danger">
              Request account deletion
            </button>
          </form>
        )}

        <h2>3. What we delete</h2>
        <ul>
          <li>Profile (name, phone, email, photo)</li>
          <li>Saved addresses and location pins</li>
          <li>In-app chat messages</li>
          <li>Open / cancelled order drafts tied to your account</li>
          <li>Login access (you cannot sign in again with the same account)</li>
        </ul>

        <h2>4. What we may keep (and for how long)</h2>
        <ul>
          <li>
            Completed payment / receipt records may be kept up to{' '}
            <strong>24 months</strong> for accounting, tax or dispute
            requirements, then deleted or anonymised
          </li>
          <li>
            Aggregated, non-identifying stats (for example total kg recycled)
            may be retained
          </li>
          <li>
            Data we must keep under Indian law until the legal retention period
            ends
          </li>
        </ul>

        <h2>5. Contact</h2>
        <p>
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
          <br />
          See also our <a href="/privacy">Privacy Policy</a>.
        </p>

        <RelatedLinks currentPath="/delete-account" />
      </div>
    </main>
  )
}
