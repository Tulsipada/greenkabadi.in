import React from 'react'

type LinkItem = { href: string; label: string }

const HOME_LINKS: LinkItem[] = [
  { href: '/contact', label: 'Contact us' },
  { href: '/#how', label: 'How it works' },
  { href: '/#materials', label: 'Materials we collect' },
  { href: '/#rates', label: "Today's scrap rates" },
  { href: '/#business', label: 'Business pickups' },
  { href: '/#download', label: 'Download the app' },
  { href: '/#faq', label: 'FAQ' },
]

const LEGAL_LINKS: LinkItem[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/delete-account', label: 'Delete account' },
]

/** Related internal links for legal/contact pages - skips the current path. */
export function RelatedLinks({ currentPath }: { currentPath: string }) {
  const home = HOME_LINKS.filter((l) => l.href !== currentPath)
  const legal = LEGAL_LINKS.filter((l) => l.href !== currentPath)

  return (
    <nav className="related-links" aria-label="Related pages">
      <h2 className="related-links-title">Explore GreenकBadi</h2>
      <ul className="related-links-list">
        {home.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      {legal.length > 0 ? (
        <>
          <h3 className="related-links-sub">Legal</h3>
          <ul className="related-links-list">
            {legal.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </nav>
  )
}
