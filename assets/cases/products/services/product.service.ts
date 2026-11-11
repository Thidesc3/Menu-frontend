import { api } from '@/lib/axios'
import type { ProductDTO } from '../dtos/product.dto'

const ENDPOINT = '/products'

export const ProductService = {
  async listByCategory(categoryId: string): Promise<ProductDTO[]> {
    const result = await api.get<ProductDTO[]>(ENDPOINT, {
      params: { categoryId },
    })
    return result.data
  },
}