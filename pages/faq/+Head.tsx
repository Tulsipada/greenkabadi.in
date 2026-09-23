import React from 'react'
import { faqPageJsonLd, jsonLdScript } from '../../seo/site'

/** FAQ rich results for /faq. */
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
