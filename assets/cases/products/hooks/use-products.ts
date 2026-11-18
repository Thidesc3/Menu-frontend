import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../services/product.service'

export function useProducts(categoryId: string | undefined) {
  return useQuery({
    queryKey: ['products', categoryId],
    queryFn: () => ProductService.listAll(categoryId),
    enabled: !!categoryId,
  })
}