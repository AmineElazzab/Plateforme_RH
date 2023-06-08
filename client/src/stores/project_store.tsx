import { create } from 'zustand';
import { IProject } from '../interfaces/project';

interface IProjectStore {
  projects: IProject[];
  setProjects: (projects: IProject[]) => void;
  addProject: (project: IProject) => void;
  removeProject: (projectId: number) => void;
  updateProject: (project: IProject) => void;
}

const useProjectStore = create<IProjectStore>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
  removeProject: (projectId) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.project_id !== projectId),
    })),
  updateProject: (project) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.project_id === project.project_id ? project : p)),
    })),
}));

export default useProjectStore;
