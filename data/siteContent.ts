/** Shared marketing content used on home + SEO pages. */

export const RATES = [
  { name: 'Iron', price: '₹22' },
  { name: 'Aluminium', price: '₹70' },
  { name: 'E-waste', price: '₹45' },
  { name: 'Paper', price: '₹12' },
  { name: 'Plastic', price: '₹28' },
] as const

export const MATERIALS = [
  {
    key: 'metal',
    title: 'mat.metal.title',
    list: 'mat.metal.list',
    desc: 'mat.metal.desc',
    src: '/img/website/metal.jpg',
    alt: 'Scrap metal - copper, iron, aluminium, steel',
  },
  {
    key: 'elec',
    title: 'mat.elec.title',
    list: 'mat.elec.list',
    desc: 'mat.elec.desc',
    src: '/img/website/electronics.jpg',
    alt: 'E-waste - fridges, TVs, laptops',
  },
  {
    key: 'paper',
    title: 'mat.paper.title',
    list: 'mat.paper.list',
    desc: 'mat.paper.desc',
    src: '/img/website/paper.jpg',
    alt: 'Paper scrap - newspaper, carton, books',
  },
  {
    key: 'plastic',
    title: 'mat.plastic.title',
    list: 'mat.plastic.list',
    desc: 'mat.plastic.desc',
    src: '/img/website/plastic.jpg',
    alt: 'Plastic scrap - PET, HDPE, mixed',
  },
] as const

export const HOW_ICONS = [
  'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10z',
  'M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h4a3 3 0 0 0 6 0h1V8zM8 18.5A1.5 1.5 0 1 1 8 15a1.5 1.5 0 0 1 0 3.5zm10 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM17 8h2.5l1.5 3H17V8z',
  'M12 3a2 2 0 0 0-2 2c0 .37.1.71.28 1L5.15 9.4A2.1 2.1 0 0 0 4.3 11c0 1.16.94 2.1 2.1 2.1h.25L12 21l5.35-7.9h.25c1.16 0 2.1-.94 2.1-2.1 0-.62-.28-1.2-.75-1.6L13.72 6c.18-.29.28-.63.28-1a2 2 0 0 0-2-2zm-3.2 8.6h6.4L12 16.9 8.8 11.6z',
  'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
] as const

export const WHY_ICONS = [
  'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15.6-4.2-4.2 1.4-1.4L11 13.8l5.6-5.6 1.4 1.4L11 16.6z',
  'M13.5 3H8v2h5.5c1.4 0 2.5 1.1 2.5 2.5S14.9 10 13.5 10H11v2h2.5c2.5 0 4.5-2 4.5-4.5S16 3 13.5 3zM11 14H8v2h3c1.1 0 2 .9 2 2s-.9 2-2 2H8v2h3c2.2 0 4-1.8 4-4s-1.8-4-4-4zM7 3H5v18h2V3z',
  'M17 8C8 10 5.9 16.2 3.8 19.5l2.4.8C8.8 16 11 12.5 17 11.2V8zM12 2C7.6 2 4 5.6 4 10c0 1.9.7 3.6 1.8 5l1.5-1.3A5.9 5.9 0 0 1 6 10c0-3.3 2.7-6 6-6s6 2.7 6 6c0 .9-.2 1.8-.6 2.6l1.7 1A7.9 7.9 0 0 0 20 10c0-4.4-3.6-8-8-8z',
] as const

/** Localities commonly covered in Phase 1 Siliguri (confirm in app when booking). */
export const SERVICE_AREAS = [
  'Champasari',
  'Milanmore / Maheshmari',
  'Pradhan Nagar',
  'Sevoke Road',
  'Hill Cart Road',
  'Matigara',
  'Salugara',
  'Shivmandir',
  'Bagdogra',
  'City Centre / Bidhan Road',
] as const
