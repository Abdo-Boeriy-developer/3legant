export type categorieType = {
  createdAt: string;
  description: string;
  image: string;
  name: string;
  updatedAt: string;
  _id: string;
};

export type categorieResponseType = {
  categories: categorieType[];
};
