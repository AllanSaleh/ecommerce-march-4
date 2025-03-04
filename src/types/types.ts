export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
  createdAt: Date;
  updatedAt: Date;
  rating: {
    rate: number;
    count: number;
  }
}

export type Category = string