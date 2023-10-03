import type { ImageType } from '@/lib/types/image'

export interface ProductInterface {
  id: number
  name: string
  price: number
  slug: string
  image: ImageType
  discountPercent?: number
}

export interface ColorProductInterface {
  name: string
  codeHex: string
}

export interface SizeProductInterface {
  number: number
}

export interface SortByProductInterface {
  name: string
  key: string
}

export interface ViewByProductInterface {
  number: number
}
