import { create } from "zustand";
import { IExercise } from "../../../interfaces/exercises";

/* Zustand para utilizar una gestion de estados pequeñas, rapida y escalable */

interface WorkoutModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  exercise: IExercise | null;
}

const useWorkoutModal = create<WorkoutModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  exercise: null,
}));

export default useWorkoutModal;
