import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import Layout from '../layouts/LayoutDefault'
import { SITE, absoluteUrl } from '../seo/site'

export default {
  extends: [vikeReact],
  Layout,
  prerender: true,
  lang: SITE.lang,
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  image: absoluteUrl(SITE.ogImagePath),
} satisfies Config
