export interface DataProductType {
  data: Data;
}
export interface Data {
  discount: number;
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

export interface Version {
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  images: string[];
  _id: string;
}
