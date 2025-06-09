import { create } from "zustand";
import type { Project } from "../interfaces/projectInterface";
import { getProjectByUserId } from "../services/projectService";

interface ProjectStore {
  projects: Project[];
  isLoading: boolean;
  error: string | null;

  fetchProjects: (userId: string) => void;
}

export const useProjectsStore = create<ProjectStore>((set) => ({
  projects: [],
  isLoading: false,
  error: null,

  fetchProjects: async (userId: string) => {
    try {
      set({ isLoading: true });
      const projectsResponse = await getProjectByUserId(userId);
      set({ projects: projectsResponse });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        set({ error: error.message });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
