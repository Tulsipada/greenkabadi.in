import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import {
  SITE,
  absoluteUrl,
  breadcrumbJsonLd,
  canonicalPath,
  jsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from '../seo/site'

/** Global head tags for crawlers (SEO + social). Cumulative with layout Head. */
export function Head() {
  const { urlPathname } = usePageContext()
  const canonical = canonicalPath(urlPathname)
  const ogImage = absoluteUrl(SITE.ogImagePath)
  const isHome = urlPathname === '/'

  const breadcrumbs =
    urlPathname === '/privacy'
      ? breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])
      : urlPathname === '/terms'
        ? breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Terms & Conditions', path: '/terms' },
          ])
        : urlPathname === '/delete-account'
          ? breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Delete Account', path: '/delete-account' },
            ])
          : null

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#0f3d2e" />
      <meta name="color-scheme" content="light" />
      <meta name="keywords" content={SITE.keywords} />
      <meta name="author" content={SITE.nameAscii} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Siliguri" />
      <meta name="language" content="English" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={SITE.origin + '/'} />
      <link rel="alternate" hrefLang="en" href={SITE.origin + '/'} />

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={isHome ? 'website' : 'article'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />
      <meta
        property="og:image:alt"
        content="GreenकBadi doorstep scrap pickup in Siliguri"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="GreenकBadi scrap pickup" />

      <link rel="icon" href="/img/logo-mark.png" type="image/png" />
      <link rel="apple-touch-icon" href="/img/logo-mark.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="application-name" content={SITE.nameAscii} />
      <meta name="apple-mobile-web-app-title" content={SITE.nameAscii} />
      <meta name="mobile-web-app-capable" content="yes" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(organizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(websiteJsonLd()),
        }}
      />
      {breadcrumbs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(breadcrumbs),
          }}
        />
      ) : null}
    </>
  )
}
