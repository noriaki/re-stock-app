"use client";

import { ReactNode, useEffect, useState } from 'react';
import { initializeLiff } from '@/lib/liff';

interface LiffProviderProps {
  children: ReactNode;
}

/**
 * LIFF SDK初期化を行うためのプロバイダーコンポーネント
 */
export function LiffProvider({ children }: LiffProviderProps) {
  const [isLiffInitialized, setIsLiffInitialized] = useState(false);

  useEffect(() => {
    // LIFF IDを環境変数から取得
    const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
    
    if (!liffId) {
      console.error('LIFF ID is not defined in environment variables');
      return;
    }
    
    // LIFF SDKを初期化
    const initLiff = async () => {
      await initializeLiff(liffId);
      setIsLiffInitialized(true);
    };
    
    initLiff();
  }, []);

  return <>{children}</>;
}