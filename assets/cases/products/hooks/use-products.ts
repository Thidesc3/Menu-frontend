import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../services/product.service'

export function useProducts(categoryId: string) {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: () => ProductService.listByCategory(categoryId),
    enabled: !!categoryId,
  })
}