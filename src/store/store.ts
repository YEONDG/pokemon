import { create } from "zustand";

type StoreState = {
  isSearchActive: boolean;
  setIsSearchActive: (active: boolean) => void;
};

export const useStore = create<StoreState>((set) => ({
  isSearchActive: false,
  setIsSearchActive: (active) => set({ isSearchActive: active }),
}));
