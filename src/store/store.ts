import { create } from "zustand";

type StoreState = {
  isSearchActive: boolean;
  setIsSearchActive: (active: boolean) => void;

  scrollPosition: number;
  setScrollPosition: (position: number) => void;
};

export const useStore = create<StoreState>((set) => ({
  isSearchActive: false,
  setIsSearchActive: (active) => set({ isSearchActive: active }),

  scrollPosition: 0,
  setScrollPosition: (position) => set({ scrollPosition: position }),
}));
