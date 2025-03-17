import { Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Item, isItemLowStock } from "@/types/inventory";

interface ItemCardProps {
  item: Item;
  isAlternate?: boolean;
}

export default function ItemCard({ item, isAlternate = false }: ItemCardProps) {
  // 未開封アイテムの丸を生成
  const renderUnopenedDots = () => {
    return Array.from({ length: item.unopenedCount }).map((_, index) => (
      <div key={`unopened-${index}`} className="w-5 h-5 rounded-full bg-green-100 border border-green-300"></div>
    ));
  };

  // 開封済みアイテムの丸を生成
  const renderOpenedDots = () => {
    return Array.from({ length: item.openedCount }).map((_, index) => (
      <div key={`opened-${index}`} className="w-5 h-5 rounded-full bg-yellow-100 border border-yellow-300"></div>
    ));
  };

  // 在庫が閾値以下かどうかを判定
  const lowStock = isItemLowStock(item);

  return (
    <div className={`py-3 px-4 border-b border-gray-200 ${isAlternate ? "bg-gray-50" : "bg-white"}`}>
      <div className="grid grid-cols-3 items-center">
        {/* 商品情報 */}
        <div className="col-span-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-100 rounded border border-gray-300 flex items-center justify-center mb-1">
            {item.image ? (
              <img src={item.image} alt={item.name.toString()} className="w-10 h-10 object-cover" />
            ) : (
              <Camera size={16} className="text-gray-500" />
            )}
          </div>
          <span className="text-xs text-center">{item.name.toString()}</span>
          {lowStock && <Badge variant="destructive" className="mt-1 text-[10px] px-1.5 py-0">残り少</Badge>}
        </div>

        {/* 未開封アイテム */}
        <div className="col-span-1 flex justify-center gap-2 flex-wrap">
          {renderUnopenedDots()}
          {item.unopenedCount > 0 && (
            <span className="text-xs text-gray-500 w-full text-center mt-1">{item.unopenedCount}</span>
          )}
        </div>

        {/* 開封済みアイテム */}
        <div className="col-span-1 flex justify-center gap-2 flex-wrap">
          {renderOpenedDots()}
          {item.openedCount > 0 && (
            <span className="text-xs text-gray-500 w-full text-center mt-1">{item.openedCount}</span>
          )}
        </div>
      </div>
    </div>
  );
}
