import create from 'zustand'

export const useBearStore = create((set: any) => ({
  bears: 10,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 100 })),
  removeAllBears: () => set({ bears: 0 }),
  toggle: false,
  toggleHandler: () => set((state: any) => ({ toggle: state.toggle })),
}))
