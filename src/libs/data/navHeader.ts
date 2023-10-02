export interface NavHeader {
  name: string
  link: string
  children?: NavHeader[]
}

export const dataNavHeader: NavHeader[] = [
  {
    name: 'Women',
    link: '/women',
    children: [
      {
        name: 'All',
        link: '/women/all',
        children: [
          {
            name: 'New Arrival',
            link: '/women/all/new-arrival'
          }
        ]
      }
    ]
  },
  {
    name: 'Men',
    link: '/men',
    children: [
      {
        name: 'All',
        link: '/men/all',
        children: [
          {
            name: 'New Arrival',
            link: '/men/all/new-arrival'
          }
        ]
      }
    ]
  },
]
