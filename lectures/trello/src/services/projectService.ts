import jsonServerInstance from "../api/jsonInstance";

export const getProjectByUserId = async (userId: string) => {
  try {
    const response = await jsonServerInstance.get(`/projects?owner=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

interface Project {
  id: string;
  name: string;
  owner: string;
  date: string;
}
export const createProject = async (project: Project) => {
  try {
    const response = await jsonServerInstance.post("/projects", project);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
