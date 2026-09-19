import React from 'react'
import { faqPageJsonLd, jsonLdScript } from '../../seo/site'

/** Home-only structured data for rich results. */
export function Head() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdScript(faqPageJsonLd()),
      }}
    />
  )
}
