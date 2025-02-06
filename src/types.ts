export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  color: string;
  imageUrl: string;
}

export interface Metric {
  label: string;
  value: string | number;
  change: number;
  icon: string;
}