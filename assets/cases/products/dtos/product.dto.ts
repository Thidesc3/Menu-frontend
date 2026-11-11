export interface ProductDTO {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  categoryId: string;
  active: boolean;
}