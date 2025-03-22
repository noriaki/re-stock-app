import { LineStorageAdapter } from '../line-storage-adapter';

// LIFFモック
const mockLiff = {
  isLoggedIn: jest.fn(),
  getDecodedIDToken: jest.fn(),
};

// localStorageモック
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

// windowオブジェクトモック
Object.defineProperty(global, 'window', {
  value: {
    liff: mockLiff,
    localStorage: mockLocalStorage,
  },
  writable: true,
});

// コンソールエラーをモック
const originalConsoleError = console.error;
console.error = jest.fn();

describe('LineStorageAdapter', () => {
  let adapter: LineStorageAdapter;
  
  beforeEach(() => {
    jest.clearAllMocks();
    adapter = new LineStorageAdapter();
  });
  
  afterAll(() => {
    console.error = originalConsoleError;
  });

  describe('getItem', () => {
    test('should prefix key with user ID when logged in', async () => {
      mockLiff.isLoggedIn.mockReturnValue(true);
      mockLiff.getDecodedIDToken.mockReturnValue({ sub: 'user123' });
      mockLocalStorage.getItem.mockReturnValue('{"test":"value"}');
      
      const result = await adapter.getItem('testKey');
      
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('user123:testKey');
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toBe('{"test":"value"}');
      }
    });
    
    test('should use normal key when not logged in', async () => {
      mockLiff.isLoggedIn.mockReturnValue(false);
      mockLocalStorage.getItem.mockReturnValue('{"test":"value"}');
      
      const result = await adapter.getItem('testKey');
      
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('testKey');
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toBe('{"test":"value"}');
      }
    });
    
    test('should handle errors', async () => {
      mockLiff.isLoggedIn.mockImplementation(() => { throw new Error('Test error'); });
      
      const result = await adapter.getItem('testKey');
      
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBeInstanceOf(Error);
        expect(result.error.message).toBe('Test error');
      }
    });
  });

  describe('setItem', () => {
    test('should prefix key with user ID when logged in', async () => {
      mockLiff.isLoggedIn.mockReturnValue(true);
      mockLiff.getDecodedIDToken.mockReturnValue({ sub: 'user123' });
      
      const result = await adapter.setItem('testKey', '{"test":"value"}');
      
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('user123:testKey', '{"test":"value"}');
      expect(result.ok).toBe(true);
    });
    
    test('should use normal key when not logged in', async () => {
      mockLiff.isLoggedIn.mockReturnValue(false);
      
      const result = await adapter.setItem('testKey', '{"test":"value"}');
      
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('testKey', '{"test":"value"}');
      expect(result.ok).toBe(true);
    });
    
    test('should handle errors', async () => {
      mockLiff.isLoggedIn.mockImplementation(() => { throw new Error('Test error'); });
      
      const result = await adapter.setItem('testKey', '{}');
      
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBeInstanceOf(Error);
        expect(result.error.message).toBe('Test error');
      }
    });
  });

  describe('removeItem', () => {
    test('should prefix key with user ID when logged in', async () => {
      mockLiff.isLoggedIn.mockReturnValue(true);
      mockLiff.getDecodedIDToken.mockReturnValue({ sub: 'user123' });
      
      const result = await adapter.removeItem('testKey');
      
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('user123:testKey');
      expect(result.ok).toBe(true);
    });
    
    test('should use normal key when not logged in', async () => {
      mockLiff.isLoggedIn.mockReturnValue(false);
      
      const result = await adapter.removeItem('testKey');
      
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('testKey');
      expect(result.ok).toBe(true);
    });
    
    test('should handle errors', async () => {
      mockLiff.isLoggedIn.mockImplementation(() => { throw new Error('Test error'); });
      
      const result = await adapter.removeItem('testKey');
      
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBeInstanceOf(Error);
        expect(result.error.message).toBe('Test error');
      }
    });
  });
});