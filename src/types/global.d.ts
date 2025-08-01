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
  keyFeatures?: string[];
  isNewArrival: boolean;
  category?: string;
  reviews?: number;
};
