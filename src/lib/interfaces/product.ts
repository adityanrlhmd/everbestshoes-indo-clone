import type { ImageType } from '@/lib/types/image'

export interface ProductInterface {
  id: number
  name: string
  price: number
  slug: string
  banner: ImageType
  gallery: ImageType[]
  discountPercent?: number
  colors: ColorProductInterface[]
  sizes: number[]
  description: string
  productDetails?: {
    name: string
    value: string
  }[]
  material?: {
    name: string
    value: string
  }[]
  shipping?: string
}

export interface ColorProductInterface {
  name: string
  codeHex: string
}

export interface SortByProductInterface {
  name: string
  key: string
}

export interface ViewByProductInterface {
  number: number
}
