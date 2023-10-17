import { create } from "zustand";

interface ErrorLoginMessageStore {
	messageError: string;
	setMessageError: (value: string) => void;
}

const useErrorLoginMessageStore = create<ErrorLoginMessageStore>((set) => ({
	messageError: "",
	setMessageError: (value: string) => set({ messageError: value }),
}));

export default useErrorLoginMessageStore;
