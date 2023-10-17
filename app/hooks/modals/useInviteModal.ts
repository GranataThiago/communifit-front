import { create } from "zustand";

/* Zustand para utilizar una gestion de estados pequeñas, rapida y escalable */

interface InviteModalStore {
  isOpen: boolean;
  name: string;
  link: string;
  onOpen: () => void;
  onClose: () => void;
  setName: (newName: string) => void;
  setLink: (newLink: string) => void;
}

const useInviteModal = create<InviteModalStore>((set) => ({
	isOpen: false,
	name: "",
	link: "test",
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	setName: (newName: string) => set({ name: newName }),
	setLink: (newLink: string) =>
		set({ link: `${process.env.NEXT_PUBLIC_DOMAIN}join/${newLink}` }),
}));

export default useInviteModal;
