import { Version } from "./VersionType";

export interface ArrivalsProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string[];
  stock: number;
  images: string[];
  offer: number;
  versions: Version[];
  rating: number;
  reviewsCount: number;
  reviews: any[];
  createdAt: string;
  updatedAt: string;
}
