export const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    try {
      return JSON.parse(savedItem) as T;
    } catch (e) {
      console.error(`Failed to parse localStorage item with key "${key}":`, e);
    }
  }
  return defaultValue;
};

export const setLocalStorageItem = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
