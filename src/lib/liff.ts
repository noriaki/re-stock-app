import type { Liff } from '@line/liff';

declare global {
  interface Window {
    liff: Liff;
  }
}

/**
 * Initialize the LIFF SDK with the provided LIFF ID
 * 
 * @param liffId - The LIFF ID obtained from LINE Developer Console
 * @returns Promise that resolves when initialization is complete
 */
export const initializeLiff = async (liffId: string): Promise<void> => {
  try {
    const liff = (await import('@line/liff')).default;
    await liff.init({ liffId });
    window.liff = liff;
  } catch (error) {
    console.error('LIFF initialization failed', error);
  }
};