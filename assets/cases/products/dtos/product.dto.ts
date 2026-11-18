export interface ProductDTO {
  id: string;
  name: string;
  description?: string;
  price: number;
  picture?: string;
  categoryId: string;
  active: boolean;
}