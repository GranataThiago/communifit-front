import { create } from "zustand";

interface LoaderStore {
	isLoading: boolean;
	setIsLoading: (value: boolean) => void;
}

const useLoader = create<LoaderStore>((set) => ({
	isLoading: false,
	setIsLoading: (value: boolean) => set({ isLoading: value }),
}));

export default useLoader;
