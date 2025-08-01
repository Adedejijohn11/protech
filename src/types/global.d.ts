// type for each card
export type cardData = {
  id: number;
  discount?: string;
  image: string[];
  make: string;
  starRating: number;
  price: number;
  oldPrice?: number;
  description: string;
  productName: string;
  category: string;
  reviews?: number;
  keyFeatures?: string[];
  isNewArrival: boolean;
};
