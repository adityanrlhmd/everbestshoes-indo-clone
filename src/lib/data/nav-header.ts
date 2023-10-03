import type { RouteRecordRaw, RouterOptions } from "vue-router"

export interface NavHeader {
  name: string
  link: string
  children?: NavHeader[]
}

export const dataNavHeader: NavHeader[] = [
  {
    name: 'Women',
    link: '/products/category/women',
    children: [
      {
        name: 'All',
        link: '/products/category/women-all',
        children: [
          {
            name: 'New Arrival',
            link: '/products/category/women-all-new-arrival'
          }
        ]
      }
    ]
  },
  {
    name: 'Men',
    link: '/products/category/men',
    children: [
      {
        name: 'All',
        link: '/products/category/men-all',
        children: [
          {
            name: 'New Arrival',
            link: '/products/category/men-all-new-arrival'
          }
        ]
      }
    ]
  },
]