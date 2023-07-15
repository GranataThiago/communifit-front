import { create } from 'zustand';

/* Zustand para utilizar una gestion de estados pequeñas, rapida y escalable */ 

interface InviteModalStore {
    isOpen: boolean;
    onOpen: () => void; 
    onClose: () => void; 
}

const useInviteModal = create<InviteModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

export default useInviteModal;