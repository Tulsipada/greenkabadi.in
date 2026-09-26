/** Canonical site SEO constants (matches public/CNAME). */
export const SITE = {
  name: 'GreenकBadi',
  nameAscii: 'GreenKabadi',
  origin: 'https://greenkabadi.in',
  email: 'hello@greenkabadi.in',
  supportEmail: 'support@greenkabadi.in',
  phone: '+919774752633',
  phoneDisplay: '+91 97747 52633',
  locale: 'en_IN',
  lang: 'en',
  tagline: 'Recycle Today. Better Tomorrow.',
  defaultTitle: 'GreenकBadi - Doorstep Scrap Pickup in Siliguri',
  defaultDescription:
    "Sell your scrap. We'll pick it up from your doorstep in Siliguri. Transparent rates, verified weight and instant digital receipts.",
  keywords:
    'scrap pickup Siliguri, sell scrap, kabadi, e-waste collection, metal scrap rates, paper scrap, plastic recycling, GreenKabadi, doorstep scrap pickup',
  ogImagePath: '/img/og-default.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/jpeg',
  logoPath: '/img/logo-mark.png',
  address: {
    street: 'Milanmore, Maheshmari, Champasari',
    locality: 'Siliguri',
    region: 'West Bengal',
    country: 'IN',
  },
} as const

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE.origin}${p}`
}

export function canonicalPath(pathname: string): string {
  if (!pathname || pathname === '/') return SITE.origin + '/'
  const clean = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return `${SITE.origin}${clean}`
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.origin}/#business`,
    name: SITE.name,
    alternateName: SITE.nameAscii,
    description: SITE.defaultDescription,
    url: SITE.origin,
    logo: absoluteUrl(SITE.logoPath),
    image: absoluteUrl(SITE.ogImagePath),
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: '₹',
    slogan: SITE.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'Siliguri',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      email: SITE.supportEmail,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'bn', 'ne'],
    },
    founder: {
      '@type': 'Person',
      name: 'Ram Bhattarai',
      jobTitle: 'Founder',
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.origin}/#website`,
    name: SITE.name,
    url: SITE.origin,
    description: SITE.defaultDescription,
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.origin}/#business` },
  }
}

/** English FAQ for JSON-LD (matches default SSR language). */
export const FAQ_JSON_LD_ITEMS = [
  {
    q: 'How do I book a pickup?',
    a: 'Download the GreenकBadi app, choose your material, add photos and address, then schedule a slot. We will assign a collector.',
  },
  {
    q: 'How is the weight verified?',
    a: 'Your collector weighs the scrap on a digital scale at your doorstep. You can see the reading before payment.',
  },
  {
    q: 'Is there a minimum quantity?',
    a: 'A small minimum helps cover the trip. Exact minimums are shown in the app for your area and material.',
  },
  {
    q: 'When do I get paid?',
    a: 'Payment is made on the spot after weighing - cash or UPI - and a digital receipt is saved in your History.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Phase 1 is live in Siliguri. More cities will follow - watch the app for updates.',
  },
  {
    q: 'Is my address shared with everyone?',
    a: 'No. Your address is shared only with the collector assigned to your pickup.',
  },
] as const

export function faqPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_JSON_LD_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function jsonLdScript(data: object) {
  return JSON.stringify(data)
}
