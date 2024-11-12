export interface ProductDTO {
  title: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
}

export interface FilterProduct {
  name: string;
  value: number;
}
