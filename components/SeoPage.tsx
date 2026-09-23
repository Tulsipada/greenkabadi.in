import React from 'react'
import { RelatedLinks } from './RelatedLinks'

type SeoPageProps = {
  currentPath: string
  kicker?: string
  title: string
  lead?: string
  children: React.ReactNode
}

/** Shared shell for SEO marketing pages (rates, FAQ, about, etc.). */
export function SeoPage({
  currentPath,
  kicker,
  title,
  lead,
  children,
}: SeoPageProps) {
  return (
    <main className="legal-page seo-page">
      <div className="container legal-card seo-card">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="updated">{lead}</p> : null}
        {children}
        <RelatedLinks currentPath={currentPath} />
      </div>
    </main>
  )
}
