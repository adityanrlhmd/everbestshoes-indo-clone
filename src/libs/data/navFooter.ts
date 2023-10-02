export interface Nav {
  name: string
  link: string
}

export interface NavFooter {
  name: string
  navigations: Nav[]
}

export const dataNavFooter: NavFooter[] = [
  {
    name: 'about',
    navigations: [
      {
        name: 'About Us',
        link: '/about-us'
      },
      {
        name: 'CSR',
        link: '/csr'
      },
      {
        name: 'Career',
        link: '/career'
      },
      {
        name: 'How To Shop',
        link: '/how-to-shop'
      },
      {
        name: 'Contact Us',
        link: '/contact-us'
      }
    ]
  },
  {
    name: 'account',
    navigations: [
      {
        name: 'My Account',
        link: '/my-account'
      },
      {
        name: 'Everbest Friends',
        link: '/everbest-friend'
      },
      {
        name: 'Return Policy',
        link: '/return-policy'
      },
      {
        name: 'Product Care',
        link: '/product-care'
      },
      {
        name: 'Size Guide',
        link: '/size-guide'
      }
    ]
  },
  {
    name: 'faq',
    navigations: [
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'Store Locator',
        link: '/store-locator'
      },
      {
        name: 'Layanan Pengaduan Konsumen, Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga, Kementerian Perdagangan Republik Indonesia, 0853-1111-1010 (WhatsApp)',
        link: '/layanan-pengaduan'
      }
    ]
  },
]
