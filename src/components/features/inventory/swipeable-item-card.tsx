'use client';

import { useState, useRef, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Item } from '@/types/inventory';
import ItemCard from '@/components/features/item-card';
import ItemOperationPanel from '@/components/features/inventory/item-operation-panel';
import { useItemStore } from '@/stores/item-store';

interface SwipeableItemCardProps {
  item: Item;
  isAlternate?: boolean;
}

export default function SwipeableItemCard({ item, isAlternate }: SwipeableItemCardProps) {
  const [showPanel, setShowPanel] = useState(false);
  const [animation, setAnimation] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Get the consumeAndOpen action from the store
  const consumeAndOpen = useItemStore((state) => state.consumeAndOpen);

  // Close panel handler
  const handleClose = () => {
    setShowPanel(false);
  };

  // Right swipe handler - perform "consume and open" quick action
  const handleRightSwipe = () => {
    if (item.unopenedCount > 0) {
      consumeAndOpen(item.id);
      
      // Show success animation
      setAnimation('success-action');
      setTimeout(() => {
        setAnimation(null);
      }, 500);
    } else {
      // Show error animation
      setAnimation('error-action');
      setTimeout(() => {
        setAnimation(null);
      }, 500);
    }
  };

  // Left swipe handler - show operation panel
  const handleLeftSwipe = () => {
    setShowPanel(true);
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleLeftSwipe,
    onSwipedRight: handleRightSwipe,
    preventScrollOnSwipe: true,
    trackMouse: false,
    delta: 10,
    swipeDuration: 500,
  });

  return (
    <div 
      className={`relative ${animation ? animation : ''}`} 
      ref={cardRef}
      {...swipeHandlers}
    >
      <div className={`transition-transform duration-300 ease-in-out ${showPanel ? 'translate-x-[-120px]' : ''}`}>
        <ItemCard item={item} isAlternate={isAlternate} />
      </div>
      
      {showPanel && (
        <div className="absolute top-0 right-0 bottom-0 flex items-center">
          <ItemOperationPanel item={item} onClose={handleClose} />
        </div>
      )}
      
      {/* Visual feedback styles for animations */}
      <style jsx>{`
        .success-action {
          animation: pulse-success 0.5s;
        }
        
        .error-action {
          animation: pulse-error 0.5s;
        }
        
        @keyframes pulse-success {
          0% { background-color: transparent; }
          50% { background-color: rgba(34, 197, 94, 0.2); }
          100% { background-color: transparent; }
        }
        
        @keyframes pulse-error {
          0% { background-color: transparent; }
          50% { background-color: rgba(239, 68, 68, 0.2); }
          100% { background-color: transparent; }
        }
      `}</style>
    </div>
  );
}