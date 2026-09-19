import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import Layout from '../layouts/LayoutDefault'

export default {
  extends: [vikeReact],
  Layout,
  prerender: true,
  title: 'GreenकBadi - Scrap pickup at your door',
  description:
    'Doorstep scrap pickup in Siliguri. Fair rates, verified weight, digital receipts.',
  lang: 'en',
} satisfies Config
