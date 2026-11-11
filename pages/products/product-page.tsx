import { useCategory } from "@/assets/cases/categories/hooks/use-category";
import { useSearchParams } from "react-router-dom";

export function ProductPage() {
    const [searchParams] = useSearchParams();
    const CategoryId = searchParams.get('categoryId');
    const {data: selectedCategory} = useCategory(CategoryId ?? '');
    return (
        <div className="flex flext-col gap-6">
            {selectedCategory && (
            <h2 className="text-2xl font-semibold uppercase">
                {selectedCategory.name}
                </h2>
            )}

        </div>
    )
}