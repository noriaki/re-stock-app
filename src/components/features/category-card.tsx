import { CategoryGroup } from "@/types/inventory";
import ItemCard from "@/components/features/item-card";

interface CategoryCardProps {
  category: CategoryGroup;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="mb-4">
      {/* カテゴリヘッダー */}
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-lg font-bold">{category.name}</h2>
      </div>

      {/* テーブルヘッダー */}
      <div className="bg-gray-200 py-1 px-4 grid grid-cols-3 text-sm font-semibold">
        <div className="col-span-1 text-center">商品</div>
        <div className="col-span-1 text-center">未開封</div>
        <div className="col-span-1 text-center">開封済</div>
      </div>

      {/* 商品リスト */}
      <div>
        {category.items.map((item, index) => (
          <ItemCard key={item.id.toString()} item={item} isAlternate={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
