'use client';

import { Button } from '@/components/ui/button';
import { useItemStore } from '@/stores/item-store';
import { Item, ItemId } from '@/types/inventory';
import { 
  RefreshCw, 
  Plus, 
  Scissors, 
  Package, 
  Settings
} from 'lucide-react';

interface ItemOperationPanelProps {
  item: Item;
  onClose: () => void;
}

export default function ItemOperationPanel({ item, onClose }: ItemOperationPanelProps) {
  // Get actions from the store
  const { 
    consumeAndOpen,
    incrementUnopenedCount, 
    decrementUnopenedCount,
    incrementOpenedCount,
    decrementOpenedCount
  } = useItemStore(state => ({
    consumeAndOpen: state.consumeAndOpen,
    incrementUnopenedCount: state.incrementUnopenedCount,
    decrementUnopenedCount: state.decrementUnopenedCount,
    incrementOpenedCount: state.incrementOpenedCount,
    decrementOpenedCount: state.decrementOpenedCount
  }));

  // Handler for showing quantity adjust modal
  const handleShowAdjustModal = () => {
    // To be implemented in the future
    console.log('Show quantity adjust modal');
    onClose();
  };

  // "Consume and open" operation (highest priority)
  const handleConsumeAndOpen = () => {
    consumeAndOpen(item.id);
    onClose();
  };

  // "Purchase" operation
  const handlePurchase = () => {
    incrementUnopenedCount(item.id);
    onClose();
  };

  // "Open" operation
  const handleOpen = () => {
    if (item.unopenedCount > 0) {
      decrementUnopenedCount(item.id);
      incrementOpenedCount(item.id);
    }
    onClose();
  };

  // "Consume" operation
  const handleConsume = () => {
    if (item.openedCount > 0) {
      decrementOpenedCount(item.id);
    }
    onClose();
  };

  return (
    <div className="bg-white shadow-lg rounded-l-md border-l border-t border-b flex flex-col p-2 h-full">
      {/* Main operations */}
      <div className="grid grid-cols-1 gap-2">
        {/* 1. "Consume and Open" (Highest priority) */}
        <Button
          onClick={handleConsumeAndOpen}
          disabled={item.unopenedCount === 0}
          className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center p-2 h-auto"
          size="sm"
        >
          <RefreshCw size={20} />
          <span className="ml-1 text-xs">使い切り+開封</span>
        </Button>

        {/* 2. "Purchase" */}
        <Button
          onClick={handlePurchase}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center p-2 h-auto"
          size="sm"
        >
          <Plus size={20} />
          <span className="ml-1 text-xs">購入</span>
        </Button>

        {/* 3. "Open" */}
        <Button
          onClick={handleOpen}
          disabled={item.unopenedCount === 0}
          className="bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center p-2 h-auto"
          size="sm"
        >
          <Package size={20} />
          <span className="ml-1 text-xs">開封</span>
        </Button>

        {/* 4. "Consume" */}
        <Button
          onClick={handleConsume}
          disabled={item.openedCount === 0}
          className="bg-red-500 hover:bg-red-600 text-white flex items-center justify-center p-2 h-auto"
          size="sm"
        >
          <Scissors size={20} />
          <span className="ml-1 text-xs">使い切り</span>
        </Button>

        {/* 5. "Detailed Adjustment" (optional) */}
        <Button
          onClick={handleShowAdjustModal}
          className="bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center p-2 h-auto"
          size="sm"
        >
          <Settings size={20} />
          <span className="ml-1 text-xs">詳細調整</span>
        </Button>
      </div>
    </div>
  );
}