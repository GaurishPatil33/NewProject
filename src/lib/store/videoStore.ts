import { create } from "zustand";

interface VideoStore {
  activeId: string | number | null;
  visibleIds: (string | number)[];
  setActiveId: (
    id:
      | string
      | number
      | null
      | ((prevId: string | number | null) => string | number | null)
  ) => void;
  setVisibleIds: (
    ids:
      | (string | number)[]
      | ((prev: (string | number)[]) => (string | number)[])
  ) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  activeId: null,
  visibleIds: [],
  setActiveId: (idOrFn) =>
    set((state) => ({
      activeId:
        typeof idOrFn === "function" ? idOrFn(state.activeId) : idOrFn,
    })),
  setVisibleIds: (updater) =>
    set((state) => ({
      visibleIds:
        typeof updater === "function" ? updater(state.visibleIds) : updater,
    })),
}));
