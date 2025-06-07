import { create } from "zustand";
import type { User } from "../interfaces/userInterface";

interface authStoreInterface {
  user: User;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<authStoreInterface>((set) => ({
  user: {} as User,
  isAuthenticated: false,
  login: (user: User) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: {} as User, isAuthenticated: false }),
}));
