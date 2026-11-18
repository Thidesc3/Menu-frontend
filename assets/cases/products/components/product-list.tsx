import { useProducts } from "../hooks/use-products";
import { ProductsCard } from "./products-card";

type ProductListProps = {
    categoryId: string | undefined;
}

export function ProductList({ categoryId }: ProductListProps) {
    const {data: products = [], isLoading} = useProducts(categoryId);

    return isLoading ? (
        <span>Carregando...</span>
    ) : (
        <ul className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductsCard product={product} />
                </li>
            ))}
        </ul>
    )
}
