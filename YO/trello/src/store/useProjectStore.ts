import { create } from "zustand";
import type { Task } from "../interfaces/taskInterface";

interface taskStoreInterface {
  task: Task;
  createTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: () => void;
}

export const useTaskStore = create<taskStoreInterface>((set) => ({
  task: { id: "0", title: "store", description: "store" } as Task,
  createTask: (task: Task) => set({ task }),
  updateTask: (task: Task) =>
    set((state: Task) => ({ task: { ...state, ...task } })),
  deleteTask: () => set({ task: {} as Task }),
}));