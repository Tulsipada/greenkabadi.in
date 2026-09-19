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

type PageMeta = {
  title?: string
  description?: string
}

/** Global head tags for crawlers (SEO + social). Cumulative with layout Head. */
export function Head() {
  const pageContext = usePageContext() as ReturnType<typeof usePageContext> &
    PageMeta
  const { urlPathname } = pageContext
  const canonical = canonicalPath(urlPathname)
  const ogImage = absoluteUrl(SITE.ogImagePath)
  const isHome = urlPathname === '/'

  const title =
    (typeof pageContext.title === 'string' && pageContext.title) ||
    SITE.defaultTitle
  const description =
    (typeof pageContext.description === 'string' && pageContext.description) ||
    SITE.defaultDescription

  const ogAlt =
    urlPathname === '/privacy'
      ? 'GreenकBadi Privacy Policy'
      : urlPathname === '/terms'
        ? 'GreenकBadi Terms and Conditions'
        : urlPathname === '/delete-account'
          ? 'GreenकBadi account deletion'
          : 'GreenकBadi doorstep scrap pickup in Siliguri'

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
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta
        name="google-site-verification"
        content="DzraDDstB1D8Lv18FK7QQfG3x48JarqHsFcTKLj5M3s"
      />
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Siliguri" />
      <meta name="language" content="English" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={SITE.origin + '/'} />
      <link rel="alternate" hrefLang="en" href={SITE.origin + '/'} />

      {/* Open Graph - Facebook, WhatsApp, LinkedIn, Telegram */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={isHome ? 'website' : 'article'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content={SITE.ogImageType} />
      <meta property="og:image:width" content={String(SITE.ogImageWidth)} />
      <meta property="og:image:height" content={String(SITE.ogImageHeight)} />
      <meta property="og:image:alt" content={ogAlt} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogAlt} />

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
