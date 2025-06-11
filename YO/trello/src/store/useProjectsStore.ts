import { create } from "zustand";
import type { Project } from "../interfaces/projectInterface";
import {
  createProject,
  deleteProject,
  getProjectByUserId,
  updateProject,
} from "../services/projectService";

interface ProjectStore {
  projects: Project[];
  isLoading: boolean;
  error: string | null;

  fetchProjects: (userId: string) => void;
  removeProject: (projectId: string) => void;
  createProject: (project: Project) => void;
  updateProject: (project: Project) => void;
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

  removeProject: async (projectId: string) => {
    try {
      set({ isLoading: true });
      await deleteProject(projectId);
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== projectId),
      }));
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        set({ error: error.message });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  createProject: async (project: Project) => {
    try {
      set({ isLoading: true });
      const projectResponse = await createProject(project);
      if (!projectResponse) {
        throw new Error("No se logro Crear el proyecto");
      }
      set((state) => ({
        projects: [...state.projects, projectResponse],
      }));
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        set({ error: error.message });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  updateProject: async (project: Project) => {
    try {
      set({ isLoading: true });
      const projectResponse = await updateProject(project);
      if (!projectResponse) {
        throw new Error("No se logro Actualizar el proyecto");
      }
      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === projectResponse.id ? projectResponse : project
        ),
      }));
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