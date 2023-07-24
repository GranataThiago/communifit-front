import { create } from 'zustand';

/* Zustand para utilizar una gestion de estados pequeñas, rapida y escalable */ 

interface WorkoutModalStore {
    isOpen: boolean;
    onOpen: () => void; 
    onClose: () => void; 
    exercise: Exercise | null;
}

const useWorkoutModal = create<WorkoutModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    exercise: null,
}))

export default useWorkoutModal;