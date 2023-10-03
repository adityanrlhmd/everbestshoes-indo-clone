import type { ImageType } from "../../types/image";

export interface BannerHomeInterface {
  image: ImageType;
  link: string;
}

export interface SubBannerHomeInterface {
  image: ImageType;
  textCTA: string;
  link: string;
}