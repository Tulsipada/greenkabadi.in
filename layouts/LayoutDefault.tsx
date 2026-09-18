import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { Head } from 'vike-react/Head'
import { I18nProvider } from '../locales/I18nContext'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext()
  const compact = pageContext.urlPathname !== '/'

  return (
    <I18nProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles/website.css" />
        <link rel="icon" href="/img/logo-mark.png" />
      </Head>
      <Header compact={compact} />
      {children}
      {!compact && <Footer />}
    </I18nProvider>
  )
}
