import { ArrivalsProduct } from "./arrivalsProductsType";
import { categorieType } from "./categoriyType";

export interface Data {
  newsbar: string;
  heroImage: string[];
  popularCategories: categorieType[];
  arrivalsProducts: ArrivalsProduct[];
}
